import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { TodoComponent } from './components/todo/todo.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { ForDemoComponent } from './components/for-demo/for-demo.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgFortrackByComponent } from './components/ng-fortrack-by/ng-fortrack-by.component';
import { NasaapiComponent } from './components/nasaapi/nasaapi.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { EMIComponent } from './components/emi/emi.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FakestoreComponent,
    TodoComponent,
    ContentProjectionComponent,
    ForDemoComponent,
    NgForComponent,
    NgFortrackByComponent,
    NasaapiComponent,
    ShoppingComponent,
    ClassbindingComponent,
    UserloginComponent,
    StylebindingComponent,
    EventbindingComponent,
    EMIComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EMIComponent]
})
export class AppModule { }
