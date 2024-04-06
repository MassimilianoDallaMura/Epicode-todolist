import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { User } from 'src/app/models/user.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks!: Todo[];
  users!: User[];

constructor(private todoSrv: TodoService, private usersSrv: UsersService) {}

ngOnInit(): void {
  this.tasks = this.todoSrv.getTasks();
  this.users = this.usersSrv.getUsers();
  console.log(this.tasks);
  console.log(this.users);}

  deleteTask(task: Todo): void {
    // Rimuovi il task dall'array tasks
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
