import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { TimeComponent } from './time/time.component';
import { ToggleComponent } from './toggle/toggle.component';
import * as UiSelectors from '../shared/ui/store/ui.selectors';

@Component({
  imports: [CommonModule, LetDirective, TimeComponent, ToggleComponent],
  selector: 'app-main',
  standalone: true,
  styleUrls: [
    './styles/main.component.css',
    `./styles/mobile.main.component.css`,
    `./styles/tablet.main.component.css`,
    `./styles/desktop.main.component.css`,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent extends BaseComponent implements OnInit {
  expanded$: Observable<boolean>;

  ngOnInit(): void {
    super.ngOnInit();

    this.expanded$ = this.store.select(UiSelectors.selectExpanded);
  }
}
