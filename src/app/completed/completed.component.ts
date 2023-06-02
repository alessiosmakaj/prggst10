import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  todos: { text: string, completed: boolean }[] = [];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.fetchCompletedTodos();
  }

  fetchCompletedTodos(): void {
    this.todosService.getTodos().then(todos => {
      this.todos = todos.filter(todo => todo.completed);
    });
  }
}

