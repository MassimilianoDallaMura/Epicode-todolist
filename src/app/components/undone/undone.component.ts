import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { User } from 'src/app/models/user.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss']
})
export class UndoneComponent {
  tasks!: Todo[];
  users!: User[];
  uncompletedTasks: Todo[] = [];

  constructor(private todoSrv: TodoService, private usersSrv: UsersService) {}

  ngOnInit(): void {
    this.tasks = this.todoSrv.getTasks();
    this.users = this.usersSrv.getUsers();
    this.uncompletedTasks = this.tasks.filter((task) => !task.completed);
  }

  deleteTask(task: Todo): void {
    const index = this.uncompletedTasks.indexOf(task);
    if (index !== -1) {
      this.uncompletedTasks.splice(index, 1);
    }
  }

  moveTask(task: Todo): void {
    this.todoSrv.moveTask(task, true); // Imposta il task come completato
    this.deleteTask(task); // Rimuovi il task dalla lista dei compiuti
  }
  
}

