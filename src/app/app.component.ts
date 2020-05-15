import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { TodoStoreService } from './services/todo-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private api: ApiService,
        private store: TodoStoreService
    ) { }

    ngOnInit(): void {
        this.getAllTodos();
    }

    getAllTodos(): void {
        this.api.getAllTodos().subscribe(
            resp => {
                this.store.todos = resp;
            }
        );
    }
}
