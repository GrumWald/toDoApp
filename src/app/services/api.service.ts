import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TodoTask } from '../models/todo-task.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiUrl = 'http://localhost:3004/tasks';

    constructor(
        private http: HttpClient
    ) { }

    addNewTodo(newTodo: TodoTask): Observable<TodoTask> {
        return this.http.post<TodoTask>(this.apiUrl, newTodo);
    }

    getAllTodos(): Observable<TodoTask[]> {
        return this.http.get<TodoTask[]>(this.apiUrl);
    }

    removeTodo(id: number): Observable<any> {
        return this.http.delete<any>(this.apiUrl + '/' + id);
    }
}

