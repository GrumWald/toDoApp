import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { TodoTask } from '../models/todo-task.model';
import { TodoStoreService } from '../services/todo-store.service';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

    todoForm = new FormGroup({
        name: new FormControl(''),
        task: new FormControl(''),
        priority: new FormControl(''),
    });

    constructor(
        private api: ApiService,
        private store: TodoStoreService
    ) { }

    ngOnInit(): void {}

    addNewToDo(): void {
        let newTodo = new TodoTask();
        newTodo = this.todoForm.value;
        this.api.addNewTodo(newTodo).subscribe(
            resp => {
                this.store.addTodo(resp);
                this.clearForm();
            }
        );
    }

    clearForm(): void {
        this.todoForm.reset();
    }
}
