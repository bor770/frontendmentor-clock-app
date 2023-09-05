import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../../shared/base/base.component';
import { TimeData, TimeOfDay } from '../../shared/time-data/time-data.model';
import * as fromRoot from '../../store/root.reducer';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-time',
  standalone: true,
  styleUrls: [
    './styles/time.component.css',
    `./styles/mobile.time.component.css`,
    `./styles/tablet.time.component.css`,
    `./styles/desktop.time.component.css`,
  ],
  templateUrl: './time.component.html',
})
export class TimeComponent extends BaseComponent implements OnInit {
  location$: Observable<string>;
  time$: Observable<string>;
  timeData$: Observable<TimeData>;
  timeOfDay$: Observable<TimeOfDay>;

  ngOnInit(): void {
    super.ngOnInit();

    const store = this.store;

    this.location$ = store.select(fromRoot.selectTimeLocation);
    this.time$ = store.select(fromRoot.selectTimeDataTime);
    this.timeData$ = store.select(fromRoot.selectTimeDataState);
    this.timeOfDay$ = store.select(fromRoot.selectTimeDataTimeOfDay);
  }

  greetingIcon(timeOfDay: TimeOfDay) {
    return `../assets/images/desktop/icon-${
      timeOfDay === 'morning' || timeOfDay === 'afternoon' ? 'sun' : 'moon'
    }.svg`;
  }
}
