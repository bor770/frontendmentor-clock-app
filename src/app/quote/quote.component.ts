import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import * as fromRoot from '../store/root.reducer';
import * as QuoteActions from './store/quote.actions';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-quote',
  standalone: true,
  styleUrls: [
    './styles/quote.component.css',
    `./styles/mobile.quote.component.css`,
    `./styles/tablet.quote.component.css`,
    `./styles/desktop.quote.component.css`,
  ],
  templateUrl: './quote.component.html',
})
export class QuoteComponent extends BaseComponent implements OnInit {
  author$: Observable<string>;
  content$: Observable<string>;

  ngOnInit(): void {
    super.ngOnInit();

    const store = this.store;

    this.author$ = store.select(fromRoot.selectQuoteAuthor);
    this.content$ = store.select(fromRoot.selectQuoteContent);
  }

  onRefresh() {
    this.store.dispatch(QuoteActions.fetch());
  }
}
