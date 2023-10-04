import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { DayOrNight, TimeData } from '../shared/time-data/time-data.model';
import { Features } from './expanded.model';
import { Width } from '../shared/layout/layout.model';
import * as TimeDataSelectors from '../shared/time-data/store/time-data.selectors';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-expanded',
  standalone: true,
  styleUrls: [
    './styles/expanded.component.css',
    `./styles/mobile.expanded.component.css`,
    `./styles/tablet.expanded.component.css`,
    `./styles/desktop.expanded.component.css`,
    `./styles/day.expanded.component.css`,
    `./styles/night.expanded.component.css`,
  ],
  templateUrl: './expanded.component.html',
})
export class ExpandedComponent extends BaseComponent implements OnInit {
  features: Features = [
    { key: `timezone`, name: `current timezone` },
    { key: `dayOfWeek`, name: `day of the week` },
    { key: `dayOfYear`, name: `day of the year` },
    { key: `weekNumber`, name: `week number` },
  ];
  mobileOrder = [0, 2, 1, 3];
  timeDataDayOrNight$: Observable<DayOrNight>;
  timeDataState$: Observable<TimeData>;

  ngOnInit(): void {
    super.ngOnInit();

    const store = this.store;

    this.timeDataDayOrNight$ = store.select(TimeDataSelectors.selectDayOrNight);
    this.timeDataState$ = store.select(TimeDataSelectors.selectState);
  }

  order(i: number, width: Width) {
    return width === 'mobile' ? this.mobileOrder[i] : undefined;
  }
}
