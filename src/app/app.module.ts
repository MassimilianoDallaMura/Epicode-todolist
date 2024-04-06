import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './todo/todo.component';
import { DoneComponent } from './components/done/done.component';
import { UndoneComponent } from './components/undone/undone.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'done',
    component: DoneComponent,
  },
  {
    path: 'undone',
    component: UndoneComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    DoneComponent,
    UndoneComponent,
    UsersComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
