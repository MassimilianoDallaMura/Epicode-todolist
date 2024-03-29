import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { User } from 'src/app/models/user.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  tasks!: Todo[];
  users!: User[];

constructor(private todoSrv: TodoService, private usersSrv: UsersService) {}

ngOnInit(): void {
  this.tasks = this.todoSrv.getTasks();
  this.users = this.usersSrv.getUsers();
  console.log(this.tasks);
  console.log(this.users);
  
}
}
