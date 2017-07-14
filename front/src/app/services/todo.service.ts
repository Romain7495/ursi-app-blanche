import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
    constructor(private http: Http) { }
    private urlBack = 'http://localhost:8000/api/';

    retrieveList() : Promise<Todo[]> {
        return this.http.get(this.urlBack + 'todos').toPromise().then(
            response => response.json() as Todo[]
        ).catch(error => console.log(error))
    }

    createTodo(todo:Todo): Promise<Todo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlBack + 'todos', todo, options).toPromise()
           .then(response => response.json() as Todo)
           .catch(error => console.log(error));
    }

    deleteTodo(id:number): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
        .delete(this.urlBack + "todos/" + id, options)
        .toPromise()
        .then(response => response.json() as Todo)
           .catch(error => console.log(error));
    }  

// create pas hhtpp.get mais http.post
// => body !

}