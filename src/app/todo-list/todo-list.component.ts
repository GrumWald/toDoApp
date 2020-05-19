import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../services/todo-store.service';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todos$ = this.store.todos$;
    activeFilterButton = 'all';

    constructor(
        private store: TodoStoreService
    ) { }

    ngOnInit(): void {
    }

    /*Filter todos - show all available todos */
    showAllTodos(): void {
        this.todos$ = this.store.todos$;
        this.activeFilterButton = 'all';
    }

    /*Filter todos - show all finished todos */
    showFinishedTodos(): void {
        this.todos$ = this.store.finishedTodos$;
        this.activeFilterButton = 'finished';
    }

    /*Filter todos - show all unfinished todos */
    showUnfinishedTodos(): void {
        this.todos$ = this.store.unfinishedTodos$;
        this.activeFilterButton = 'unfinished';
    }
}
