import { Component, inject, OnInit, signal } from '@angular/core';
import { QuoteService } from './services/quote.service';
import { Quote } from './models/quote.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly quoteService = inject(QuoteService);

  readonly quote = signal<Quote | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.fetchQuote();
  }

  fetchQuote(): void {
    this.loading.set(true);
    this.error.set(null);

    this.quoteService.getRandomQuote().subscribe({
      next: (quote) => {
        this.quote.set(quote);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(
          'The spirit gate is closed. Check your connection and try again.'
        );
        this.loading.set(false);
      },
    });
  }
}
