import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { DayOrNight } from '../shared/time-data/time-data.model';
import { BaseComponent } from '../shared/base/base.component';
import * as JokeActions from './store/joke.actions';
import * as JokeSelectors from './store/joke.selectors';
import * as TimeDataSelectors from '../shared/time-data/store/time-data.selectors';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-joke',
  standalone: true,
  styleUrls: [
    './styles/joke.component.css',
    `./styles/mobile.joke.component.css`,
    `./styles/tablet.joke.component.css`,
    `./styles/desktop.joke.component.css`,
    `./styles/day.joke.component.css`,
    `./styles/night.joke.component.css`,
  ],
  templateUrl: './joke.component.html',
})
export class JokeComponent extends BaseComponent implements OnInit {
  joke$: Observable<string>;
  timeDataDayOrNight$: Observable<DayOrNight>;

  ngOnInit(): void {
    super.ngOnInit();

    const store = this.store;

    this.joke$ = store.select(JokeSelectors.selectState);
    this.timeDataDayOrNight$ = store.select(TimeDataSelectors.selectDayOrNight);
  }

  refresh() {
    this.store.dispatch(JokeActions.fetch());
  }
}
