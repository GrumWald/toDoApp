import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../services/todo-store.service';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todos$ = this.store.todos$;

    constructor(
        private store: TodoStoreService
    ) { }

    ngOnInit(): void {
    }
}
