import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { User } from 'src/app/models/user.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent {
  tasks!: Todo[];
  users!: User[];
  completedTasks: Todo[] = []; // Array per i task completati

  constructor(private todoSrv: TodoService, private usersSrv: UsersService) {}

  ngOnInit(): void {
    this.tasks = this.todoSrv.getTasks();
    this.users = this.usersSrv.getUsers();
    this.completedTasks = this.tasks.filter((task) => task.completed);
  }

  deleteTask(task: Todo): void {
    const index = this.completedTasks.indexOf(task);
    if (index !== -1) {
      this.completedTasks.splice(index, 1);
    }
  }

  async moveTask(task: Todo): Promise<void> {
    await this.todoSrv.moveTask(task, false); // Utilizzo di await per aspettare il completamento dell'azione del servizio e cambiare lo stato
    this.deleteTask(task); 
  }
  
}