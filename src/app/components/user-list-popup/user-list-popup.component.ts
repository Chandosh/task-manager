import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserList } from 'src/app/model/user-list';
import { TaskConstant } from 'src/app/constant/task.constant'; 

@Component({
  selector: 'app-user-list-popup',
  templateUrl: './user-list-popup.component.html',
  styleUrls: ['./user-list-popup.component.scss']
})
export class UserListPopupComponent implements OnInit {

  userConstant = TaskConstant.userPopup;
  selectedUser: string;
  userList: UserList;
  constructor(private dialogRef: MatDialogRef<UserListPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
   this.userList = data.userList;
   if(data.selectedUser) {
     this.selectedUser = data.selectedUser;
   }
  }

  ngOnInit(): void {

  }

  closeDialog(){
    let item = this.userList.users.filter(x => x.id === this.selectedUser)
    this.dialogRef.close({data: item[0]});
  }
}
