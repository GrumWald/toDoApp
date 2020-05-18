import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoTask } from '../models/todo-task.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    /* TODO: move to runtime loaded config file */
    apiUrl = 'http://localhost:3004/tasks';

    constructor(
        private http: HttpClient
    ) { }

    /* Call to API - add new todo task to database */
    addNewTodo(newTodo: TodoTask): Observable<TodoTask> {
        return this.http.post<TodoTask>(this.apiUrl, newTodo);
    }

    /* Call to API - return all todo tasks from database */
    getAllTodos(): Observable<TodoTask[]> {
        return this.http.get<TodoTask[]>(this.apiUrl);
    }

    /* Call to API - remove todo task from database database */
    removeTodo(id: number): Observable<any> {
        return this.http.delete<any>(this.apiUrl + '/' + id);
    }

    /* Call to API - marks todo task as finished */
    setTodoFinished(id: number): Observable<TodoTask> {
        return this.http.patch<TodoTask>(this.apiUrl + '/' + id, { finished: true });
    }
}

