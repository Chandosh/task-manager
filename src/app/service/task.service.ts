import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { TaskConstant } from '../constant/task.constant'
import { CreateTask } from '../model/create-task';
import { DeleteTask } from '../model/delete-task';
import { UpdateTask } from '../model/update-task';
import { UserList } from '../model/user-list';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpService: HttpService) { }

  listTask(): any  {
    return this.httpService.get(TaskConstant.apiRequests.listTask, null);
  }

  listUsers(): any {
    return this.httpService.get(TaskConstant.apiRequests.listUsers, null);
  }

  createTask(createPayload) {
    return this.httpService.post(TaskConstant.apiRequests.createTask, null, createPayload);
  }

  updateTask(updatePayload): any {
    return this.httpService.post(TaskConstant.apiRequests.updateTask, null, updatePayload);
  }

  deleteTask(deletePayload): any {
    return this.httpService.post(TaskConstant.apiRequests.deleteTask, null, deletePayload);
  }

}
