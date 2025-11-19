import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';
import { PracticeComponent } from './practice/pratice.component';
import { TodoFormComponent } from './table/todo-dashboard/todo-form/todo-form.component';
import { TodoListComponent } from './table/todo-dashboard/todo-list/todo-list.component';
import { TodoDashboardComponent } from './table/todo-dashboard/todo-dashboard/todo-dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    TableComponent,
    CardsComponent,
    PracticeComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
