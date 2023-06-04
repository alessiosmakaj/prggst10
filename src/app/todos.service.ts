import { Injectable } from '@angular/core';
import { Todo } from './interface/interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[] = [];
  private todoIdCounter = 1;

  addNewTodoAction(text: string): void {
    const newTodo: Todo = {
      id: this.todoIdCounter++,
      text,
      completed: false
    };
    this.todos.push(newTodo);
  }

  markTodoAsCompleted(todo: Todo): void {
    todo.completed = true;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  getCompletedTodos(): Todo[] {
    return this.todos.filter(todo => todo.completed);
  }
}
