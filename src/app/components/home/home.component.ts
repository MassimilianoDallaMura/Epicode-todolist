import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { User } from 'src/app/models/user.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks!: Todo[];
  users!: User[];
  selectedTaskId!: number;
  selectedTask!: Todo | undefined; // Variable to store the selected task
  editedTask!: Todo; // Variable to store the edited task temporarily
  selectedUserId: number | null = null;

  constructor(private todoSrv: TodoService, private usersSrv: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.tasks = this.todoSrv.getTasks();
    this.users = this.usersSrv.getUsers();
  }

  deleteTask(task: Todo): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  openModal(taskId: number | undefined): void {
    if (taskId !== undefined) {
      this.selectedTaskId = taskId;
      this.selectedTask = this.tasks.find(task => task.id === taskId);
      // Make a copy of the selected task for editing
      if (this.selectedTask) {
        // Copia dell'attività selezionata
        this.editedTask = { ...this.selectedTask };
        // Aggiornamento del campo userId nell'editedTask
        this.editedTask.userId = this.selectedTask.userId;
      }
     
    }
  }

  getTaskTitle(taskId: number): string | undefined {
    const task = this.tasks.find(task => task.id === taskId);
    return task ? task.todo : undefined;
  }

  getTaskAuthor(taskId: number): string | undefined {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      const user = this.users.find(user => user.id === task.userId);
      if (user) {
        return `${user.firstName} ${user.lastName}`;
      }
    }
    return undefined;

  }


  // gestire la visibilità del messaggio
savedMessageVisible: boolean = false;

// mostrare il messaggio dopo aver salvato le modifiche
showSavedMessage(): void {
  this.savedMessageVisible = true;
}

// nascondere il messaggio
hideSavedMessage(): void {
  this.savedMessageVisible = false;
}
 // salvare le modifiche
 saveChanges(): void {
  if (this.selectedTaskId && this.editedTask) {
    const index = this.tasks.findIndex(task => task.id === this.selectedTaskId);
    if (index !== -1) {

      // Aggiorna il task nell'array principale
      this.tasks[index] = { ...this.editedTask };
      console.log(this.editedTask)


      
      // Chiamata alla funzione per mostrare il messaggio dopo aver salvato le modifiche
      this.showSavedMessage();
    }
  }
}

}








