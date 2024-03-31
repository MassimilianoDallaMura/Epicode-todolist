import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.interface';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UncompletedTasksService {
  uncompletedTasks: Todo[] = [];

  constructor() {}

  addTask(task: Todo): void {
    this.uncompletedTasks.push(task);
  }

  removeTask(task: Todo): void {
    const index = this.uncompletedTasks.indexOf(task);
    if (index !== -1) {
      this.uncompletedTasks.splice(index, 1);
    }
  }
}