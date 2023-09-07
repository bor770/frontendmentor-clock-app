import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from './shared/base/base.component';
import { ExpandedComponent } from './expanded/expanded.component';
import { MainComponent } from './main/main.component';
import { TimeOfDay } from './shared/time-data/time-data.model';
import { Width } from './shared/layout/layout.model';
import * as fromRoot from './store/root.reducer';

@Component({
  imports: [
    CommonModule,
    LetDirective,
    RouterOutlet,
    ExpandedComponent,
    MainComponent,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrls: [
    './styles/app.component.css',
    `./styles/mobile.app.component.css`,
    `./styles/tablet.app.component.css`,
    `./styles/desktop.app.component.css`,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent extends BaseComponent implements OnInit {
  expanded$: Observable<boolean>;
  timeOfDay$: Observable<TimeOfDay>;

  ngOnInit(): void {
    super.ngOnInit();

    const store = this.store;

    this.expanded$ = store.select(fromRoot.selectUIExpanded);
    this.timeOfDay$ = store.select(fromRoot.selectTimeDataTimeOfDay);
  }

  bgImage(timeOfDay: TimeOfDay, width: Width) {
    const time =
      timeOfDay === `morning` || timeOfDay === `afternoon` ? `day` : `night`;

    return `url(../assets/images/${width}/bg-image-${time}time.jpg)`;
  }
}
