import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { Features } from './expanded.model';
import { TimeData, TimeOfDay } from '../shared/time-data/time-data.model';
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
  timeDataState$: Observable<TimeData>;
  timeDataTimeOfDay$: Observable<TimeOfDay>;

  ngOnInit(): void {
    super.ngOnInit();

    this.timeDataState$ = this.store.select(TimeDataSelectors.selectState);
    this.timeDataTimeOfDay$ = this.store.select(
      TimeDataSelectors.selectTimeOfDay
    );
  }

  order(i: number, width: Width) {
    return width === 'mobile' ? this.mobileOrder[i] : undefined;
  }
}
