import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../interface/interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  newAction = '';
  todos: Todo[] = [];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  submitForm(): void {
    if (this.newAction.trim() !== '') {
      this.todosService.addNewTodoAction(this.newAction);
      this.newAction = '';
      this.fetchTodos();
    }
  }

  fetchTodos(): void {
    this.todos = this.todosService.getTodos();
  }

  markAsCompleted(todo: Todo): void {
    this.todosService.markTodoAsCompleted(todo);
  }
}
