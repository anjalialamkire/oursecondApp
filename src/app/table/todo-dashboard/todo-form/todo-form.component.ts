import { NgForOfContext } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
 
@Output() emitTodo : EventEmitter<Itodo> = new EventEmitter()
  

  constructor() { }

  ngOnInit(): void {
  }

     onTodoAdd(form : NgForm){
    let todoObj : Itodo = {...form.value,todoId : this.uuid()}
    console.log(todoObj)
    form.reset()
    this.emitTodo.emit(todoObj)
  }

   uuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
    });
};

}
