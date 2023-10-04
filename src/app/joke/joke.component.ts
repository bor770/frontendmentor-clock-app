import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import * as JokeActions from './store/joke.actions';
import * as JokeSelectors from './store/joke.selectors';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-joke',
  standalone: true,
  styleUrls: [
    './styles/joke.component.css',
    `./styles/mobile.joke.component.css`,
    `./styles/tablet.joke.component.css`,
    `./styles/desktop.joke.component.css`,
  ],
  templateUrl: './joke.component.html',
})
export class JokeComponent extends BaseComponent implements OnInit {
  joke$: Observable<string>;

  ngOnInit(): void {
    super.ngOnInit();

    this.joke$ = this.store.select(JokeSelectors.selectState);
  }

  refresh() {
    this.store.dispatch(JokeActions.fetch());
  }
}
