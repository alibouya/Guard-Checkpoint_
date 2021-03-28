import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   todo = new Todo();
   todos: Todo[];
   tentative='';
  constructor(private todoService: TodoService,
    private router: Router) { }

  ngOnInit(): void {
    this.todos=this.todoService.getTodos();
  }
  addTodo(){
    if(this.todos.length){
      this.todo.id=this.todos[this.todos.length-1].id+1;

    } else {
      this.todo.id= 1;
    }
   this.todoService.addTodo(this.todo);
   this.todo=new Todo();
  }
  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo);
  }
  jouer(){
    //si le mot introduit === card on l'envoi vers cardComponent
    //sinon en affiche un message d'erreur

    const LINK =['navbar'];
    if(this.tentative==='navbar'){
      this.router.navigate(LINK);
    } else{
      this.tentative='Veuillez Réessayer';
    }
  }

}
