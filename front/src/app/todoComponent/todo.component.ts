import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: 'todo.component.html',
    providers : [TodoService]
})

export class TodoComponent implements OnInit {
    constructor(private todoService : TodoService) { }

    ngOnInit() { this.getTodos() }

    private todos : Todo[];
    private todo = new Todo();
    private idTodo : number;
    private todoTitle : String;
    private errorMessage : String;

    getTodos() : void {
        this.todoService.retrieveList().then(
            todos => this.todos = todos
        )
    }

    addTodo(): void {
     this.todoService.createTodo(this.todo)
	     .then( todo => {
			                this.getTodos();		
                            this.reset();   
		                    this.todoTitle = todo.title;						   
			 },
                         error => this.errorMessage = <any>error);
   }

   deleteTodo(id:number): void {
     this.todoService.deleteTodo(id)
	     .then( todo => {
			                this.getTodos();		
                            this.reset();   
			 },
                         error => this.errorMessage = <any>error);
   }

      private reset() {
	   this.todo.title = null;
	   this.todoTitle = null;
	   this.todoTitle = null;
   }

}