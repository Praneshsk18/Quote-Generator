import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote.model';

@Injectable({ providedIn: 'root' })
export class QuoteService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://dummyjson.com/quotes/random';

  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.apiUrl);
  }
}
