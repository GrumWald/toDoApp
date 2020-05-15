import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoTask } from '../models/todo-task.model';

@Injectable({
    providedIn: 'root'
})

export class TodoStoreService {

    constructor() { }

    private readonly _todos = new BehaviorSubject<TodoTask[]>([]);

    readonly todos$ = this._todos.asObservable();

    get todos(): TodoTask[] {
        return this._todos.getValue();
    }

    set todos(val: TodoTask[]) {
        this._todos.next(val);
    }

    addTodo(newTodo: TodoTask) {
        this.todos = [
            ...this.todos,
            newTodo
        ];
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}
