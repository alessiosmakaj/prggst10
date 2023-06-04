import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../interface/interface';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.fetchCompletedTodos();
  }

  async fetchCompletedTodos(): Promise<void> {
    try {
      this.todos = await this.todosService.getCompletedTodos();
    } catch (error) {
      // Gestisci eventuali errori qui
    }
  }

}
