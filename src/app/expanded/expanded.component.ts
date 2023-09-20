import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { Features } from './expanded.model';
import { TimeData, TimeOfDay } from '../shared/time-data/time-data.model';
import * as fromRoot from '../store/root.reducer';

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
    { key: `dayOfYear`, name: `day of the year` },
    { key: `dayOfWeek`, name: `day of the week` },
    { key: `weekNumber`, name: `week number` },
  ];
  timeDataState$: Observable<TimeData>;
  timeDataTimeOfDay$: Observable<TimeOfDay>;

  ngOnInit(): void {
    super.ngOnInit();

    this.timeDataState$ = this.store.select(fromRoot.selectTimeDataState);
    this.timeDataTimeOfDay$ = this.store.select(
      fromRoot.selectTimeDataTimeOfDay
    );
  }
}
