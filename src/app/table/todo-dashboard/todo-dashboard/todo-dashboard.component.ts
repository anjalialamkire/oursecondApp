import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
 todoArray:Array<Itodo>=[
  {
    todoItem:'Angular',
    todoId :'321'
  },
  {
    todoItem:'Ngrx',
    todoId:'543'
  }
 ]
  constructor() { }

  ngOnInit(): void {
  }

  getNewTodo(todo : Itodo){
     this.todoArray.unshift(todo)
  }

}
