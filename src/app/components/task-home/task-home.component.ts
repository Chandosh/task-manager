import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { TaskConstant } from 'src/app/constant/task.constant';
import { Task } from 'src/app/model/task';
import { TaskList } from 'src/app/model/task-list';
import { UserList } from 'src/app/model/user-list';
import { TaskService } from 'src/app/service/task.service';
import { CommonService } from 'src/app/shared/common/common.service';
import { CreateUpdateTaskPopupComponent } from '../create-update-task-popup/create-update-task-popup.component';
import { UserListPopupComponent } from '../user-list-popup/user-list-popup.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  taskList:TaskList;
  loading: boolean;
  userList: UserList;
  taskConstant = TaskConstant.textConstants;

  notTriaged: Array<Task>; 
  high: Array<Task>;
  medium: Array<Task>;
  low: Array<Task>;

  constructor(private taskService: TaskService,
     public dialog: MatDialog, private commonService: CommonService,) {
       this.loading = false;
      }

  ngOnInit(): void {
    this.listUser();
    this.listTask();
  }

  listUser() {
    this.loading = true;
    this.taskService.listUsers().subscribe((data) => {
      this.loading = false;
      this.userList = data;
      
    }, error => {
      this.loading = false;
    });
  }

  listTask(reload= true) {
    if(reload){
      this.loading = true;
    }
    this.taskService.listTask().subscribe((data) => {
      this.loading = false;
      this.taskList = data;
      this.notTriaged = this.taskList.tasks.filter(x=> (x.priority === '' ||  !x.priority ));
      this.high = this.taskList.tasks.filter(x=> x.priority === '3' );
      this.medium = this.taskList.tasks.filter(x=> x.priority === '2' );
      this.low = this.taskList.tasks.filter(x=> x.priority === '1' );
    }, error => {
      this.loading = false;
    });
  }

   drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      return;
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const task= event.previousContainer.data[event.previousIndex];
      const priority = event.container.id.includes('0') ? 3 : (event.container.id.includes('1') ? 2 : 1);
      this.updatePriority(priority, task);
      transferArrayItem(event.previousContainer.data, event.container.data,
      event.previousIndex, event.currentIndex);
    }
  }
  updatePriority(priority, task) {
    this.loading = true;
    let updatePriority = new FormData();
    updatePriority.append('priority', priority);
    updatePriority.append('taskid', task.id);
    this.taskService.updateTask(updatePriority).subscribe((data) => {
      this.loading = false;
      if(data.status === 'success') {
        this.listTask();
        this.commonService.openSnackBar("Task priority updated");
      } else {
        this.commonService.openSnackBar("Task priority update failed");
      }
    }, error => {
      this.loading = false;
      this.commonService.openSnackBar("Task priority update failed");
    });
  }

  openCreateUpdateDialog(task: Task = null, updateMode: boolean = false) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "50vw";
    dialogConfig.disableClose = true;
    dialogConfig.data =  { updateMode: updateMode,
                           userList: this.userList,
                          task: task};

    let dialogRef;
    dialogRef = this.dialog.open(CreateUpdateTaskPopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result.data) {
          this.listTask();
      }
    });
  }

  editTask(taskId: string) {
    let task: Task = this.findTask(taskId);
    this.openCreateUpdateDialog(task, true);
  } 

  findTask(taskId: string) {
    return this.taskList.tasks.filter(x => x.id === taskId)[0];
  }

  deleteTask(taskId: string) {
    this.loading = true;
    let deleteData = new FormData();
    deleteData.append('taskid', taskId);
    this.taskService.deleteTask(deleteData).subscribe((data) => {
      this.loading = false;
      if(data.status === 'success') {
        this.listTask();
        this.commonService.openSnackBar("Task deleted");
      } else {
        this.commonService.openSnackBar("Task deleted failed");
      }
    }, error => {
      this.loading = false;
      this.commonService.openSnackBar("Task deleted failed");
    });
  }

  getImageUrl(userId) {
    if(userId) {
      const user = this.findUser(userId);
      return user.picture;
    } else {
      return 'assets/empty.png';
    }
  }
  findUser(userId: string) {
    return this.userList.users.filter(x => x.id === userId)[0];
  }

  openUserDialog(taskId: string) {
    const task: Task = this.findTask(taskId);

    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "50vw";
    dialogConfig.disableClose = true;
    dialogConfig.data = {userList: this.userList,
                        selectedUser: task.assigned_to ? task.assigned_to : ''};
    const dialogRef = this.dialog.open(UserListPopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
        if (result.data) {
          this.updateAssignee(result.data.id, task);
          this.listTask();
        }
      });
  }

  updateAssignee(assignee, task) {
    let updatePriority = new FormData();
    updatePriority.append('assigned_to', assignee);
    updatePriority.append('taskid', task.id);
    this.taskService.updateTask(updatePriority).subscribe((data) => {
      if(data.status === 'success') {
        this.listTask();
        this.commonService.openSnackBar("Assignee updated");
      } else {
        this.commonService.openSnackBar("Assignee update failed");
      }
    }, error => {
      this.commonService.openSnackBar("Assignee update failed");
    });
  }
}

