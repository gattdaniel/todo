import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('cypress-sandbox');
  protected readonly todos = signal<string[]>([]);
  protected newTodo = '';

  constructor(private translate: TranslateService) {}

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.update((current) => [...current, this.newTodo.trim()]);
      this.newTodo = '';
    }
  }
}
