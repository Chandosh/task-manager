import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskConstant } from 'src/app/constant/task.constant';
import { Task } from 'src/app/model/task';
import { UserList } from 'src/app/model/user-list';
import { TaskService } from 'src/app/service/task.service';
import { CommonService } from 'src/app/shared/common/common.service';
import { UserListPopupComponent } from '../user-list-popup/user-list-popup.component';

@Component({
  selector: 'app-create-update-task-popup',
  templateUrl: './create-update-task-popup.component.html',
  styleUrls: ['./create-update-task-popup.component.scss']
})
export class CreateUpdateTaskPopupComponent implements OnInit {

  updateTask: Task;
  isUpdateMode: boolean;
  userList: UserList;
  selectedUserImage: string;
  loading: boolean;
  minDate = new Date();
  taskConstant = TaskConstant.taskPopup;
  createForm: FormGroup;
  priority: any = [ 
    { value: 'High', key: '3' },
    { value: 'Medium', key: '2' },
    { value: 'Low', key: '1' }
  ];
  constructor(private crateDialogRef: MatDialogRef<CreateUpdateTaskPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  private formBuilder: FormBuilder, private taskService: TaskService,
  public dialog: MatDialog, private commonService: CommonService) {
    this.selectedUserImage = 'assets/empty.png';
    this.loading = false; 
    this.isUpdateMode = data.updateMode;
    this.userList = data.userList;
    this.updateTask = data.task;
    if(this.updateTask && this.updateTask.assigned_to) { 
      this.setUserImage();
    }
   }

  ngOnInit(): void {
    this.buildCreateForm();
  }

  setUserImage() {
    this.selectedUserImage = this.userList.users.filter(x=> x.id === this.updateTask.assigned_to)[0].picture;
  }
  buildCreateForm() {
    this.createForm = new FormGroup({
      message: new FormControl((this.isUpdateMode && this.updateTask.message) ? this.updateTask.message : '', Validators.required),
      due_date:  new FormControl((this.isUpdateMode && this.updateTask.due_date)  ? this.updateTask.due_date.split(' ').join('T') : ''),
      priority:  new FormControl((this.isUpdateMode && this.updateTask.priority) ? this.updateTask.priority : ''),
      assigned_to:  new FormControl((this.isUpdateMode && this.updateTask.assigned_to) ? this.updateTask.assigned_to : ''),
      assignee: new FormControl((this.isUpdateMode && this.updateTask.assigned_name)  ? this.updateTask.assigned_name : ''),
    });
  }

  openUserDialog() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "50vw";
    dialogConfig.disableClose = true;
    dialogConfig.data = {userList: this.userList,
                         selectedUser: ''};
    
    let dialogRef;
    dialogRef = this.dialog.open(UserListPopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result.data) {
        this.createForm.patchValue({assigned_to: result.data.id});
        this.createForm.patchValue({assignee: result.data.name});
        this.selectedUserImage = result.data.picture;
      }
    });

  }

  createUpdateTask() {
    const dueDate = this.formatDate();
    this.loading = true; 
    let body = new FormData();
    body.append('message', this.createForm.value.message);
    body.append('priority', this.createForm.value.priority);
    body.append('due_date',  dueDate);
    body.append('assigned_to', this.createForm.value.assigned_to);
    if(this.isUpdateMode) {
      body.append('taskid', this.updateTask.id);
      this.updatTask(body);
    } else {
    this.createTask(body);
    }
  }

  createTask(payload) {
    this.taskService.createTask(payload).subscribe((response) => {
      this.loading = false; 
      this.crateDialogRef.close({data: true});
      this.commonService.openSnackBar("Task Created");
    }, error => {
      this.loading = false; 
      this.crateDialogRef.close({data: true});
    });
  }

  updatTask(payload) {
    this.taskService.updateTask(payload).subscribe((response) => {
      this.loading = false; 
      this.crateDialogRef.close({data: true});
      this.commonService.openSnackBar("Task Updated");
    }, error => {
      this.loading = false; 
      this.crateDialogRef.close({data: true});
    });
  }

  formatDate() {
    const month = (new Date(this.createForm.value.due_date).getMonth() + 1) > 9 ? 
    (new Date(this.createForm.value.due_date).getMonth() + 1) : ('0'+ (new Date(this.createForm.value.due_date).getMonth() + 1));
    const day = new Date(this.createForm.value.due_date).getDate()  > 9 ? 
    new Date(this.createForm.value.due_date).getDate() : ('0'+ new Date(this.createForm.value.due_date).getDate());
    let dueDate = new Date(this.createForm.value.due_date).getFullYear() + '-';
    dueDate += month + '-';
    dueDate += day 
    dueDate += ' 23:59:59';
    return dueDate;
  }

}
