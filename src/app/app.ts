import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('cypress-sandbox');
  protected readonly todos = signal<string[]>([]);
  protected newTodo = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.update((current) => [...current, this.newTodo.trim()]);
      this.newTodo = '';
    }
  }
}
