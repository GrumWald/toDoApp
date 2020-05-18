import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoTask } from '../models/todo-task.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class TodoStoreService {

    constructor() { }

    private readonly _todos = new BehaviorSubject<TodoTask[]>([]);

    readonly todos$ = this._todos.asObservable();
    readonly finishedTodos$ = this.todos$.pipe(
        map(todos => todos.filter(todo => todo.finished))
    );
    readonly unfinishedTodos$ = this.todos$.pipe(
        map(todos => todos.filter(todo => !todo.finished))
    );

    /* Return all todos from local store */
    get todos(): TodoTask[] {
        return this._todos.getValue();
    }

    /* Sets all todos in local store */
    set todos(val: TodoTask[]) {
        this._todos.next(val);
    }

    /* Add new todo to array of todos in local store */
    addTodo(newTodo: TodoTask) {
        this.todos = [
            ...this.todos,
            newTodo
        ];
    }

    /* Remove todo from array of todos in local store */
    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    /* Mark todo with current id as finished */
    setCompleted(id: number, finished: boolean) {
        let todo = this.todos.find(todo => todo.id === id);

        if (todo) {
            const index = this.todos.indexOf(todo);
            this.todos[index] = {
                ...todo,
                finished
            }
            this.todos = [...this.todos];
        }
    }
}
