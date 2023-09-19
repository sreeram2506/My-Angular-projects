import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';

import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FakestoreComponent } from './components/fakestore/fakestore.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    FakestoreComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FakestoreComponent]
})
export class AppModule { }
