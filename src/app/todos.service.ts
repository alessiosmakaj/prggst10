import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: { text: string, completed: boolean }[] = [];

  constructor() { }

  getTodos(): Promise<{ text: string, completed: boolean }[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.todos);
      }, 2000);
    });
  }

  addTodo(todo: string): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.todos.push({ text: todo, completed: false });
        resolve();
      }, 2000);
    });
  }

  removeTodo(todo: string): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = this.todos.findIndex(item => item.text === todo);
        if (index !== -1) {
          this.todos.splice(index, 1);
        }
        resolve();
      }, 2000);
    });
  }

  updateTodo(oldTodo: string, newTodo: string): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = this.todos.findIndex(item => item.text === oldTodo);
        if (index !== -1) {
          this.todos[index].text = newTodo;
        }
        resolve();
      }, 2000);
    });
  }

  markTodoAsCompleted(todo: string): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = this.todos.findIndex(item => item.text === todo);
        if (index !== -1) {
          this.todos[index].completed = true;
        }
        resolve();
      }, 2000);
    });
  }
}
