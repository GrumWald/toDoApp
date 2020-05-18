import { Component, OnInit, Input } from '@angular/core';
import { TodoTask } from '../models/todo-task.model';
import { TodoStoreService } from '../services/todo-store.service';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
    @Input() todoItem: TodoTask;

    constructor(
        private store: TodoStoreService,
        private api: ApiService
    ) { }

    ngOnInit(): void {
    }

    deleteTodo(todoId: number): void {
        this.api.removeTodo(todoId).subscribe(
            resp => {
                console.log(resp);
                this.store.removeTodo(todoId);
            }
        );
    }


}
