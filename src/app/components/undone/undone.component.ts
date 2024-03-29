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
  uncompletedTasks: Todo[] = []; // Array per i task completati

  constructor(private todoSrv: TodoService, private usersSrv: UsersService) {}

  ngOnInit(): void {
    this.tasks = this.todoSrv.getTasks();
    this.users = this.usersSrv.getUsers();
    this.uncompletedTasks = this.tasks.filter(task => !task.completed);
    console.log(this.tasks);
    console.log(this.users);
    console.log(this.uncompletedTasks);
  }

  deleteTask(task: Todo): void {
    // Rimuovi il task dall'array tasks
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}


