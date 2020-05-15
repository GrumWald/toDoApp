import { Component, OnInit, Input } from '@angular/core';
import { TodoTask } from '../models/todo-task.model';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
    @Input() todoItem: TodoTask;

    constructor() { }

    ngOnInit(): void {
    }

}
