import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../../shared/base/base.component';
import { ToggleAction } from './toggle.model';
import { Width } from '../../shared/layout/layout.model';
import * as fromRoot from '../../store/root.reducer';
import * as UIActions from '../../shared/ui/store/ui.actions';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-toggle',
  standalone: true,
  styleUrls: [
    './styles/toggle.component.css',
    `./styles/mobile.toggle.component.css`,
    `./styles/tablet.toggle.component.css`,
    `./styles/desktop.toggle.component.css`,
  ],
  templateUrl: './toggle.component.html',
})
export class ToggleComponent extends BaseComponent implements OnInit {
  expanded$: Observable<boolean>;
  hover = false;

  ngOnInit(): void {
    super.ngOnInit();

    this.expanded$ = this.store.select(fromRoot.selectUIExpanded);
  }

  buttonContent(expanded: boolean): ToggleAction {
    return expanded ? `Less` : `More`;
  }

  imgSrc(expanded: boolean, width: Width) {
    return `../../../assets/images/desktop/icon-arrow-${
      expanded ? `up` : `down`
    }-circle${this.hover && width === `desktop` ? `-hover` : ``}.svg`;
  }

  onHover() {
    this.hover = !this.hover;
  }

  onToggleExpanded() {
    this.store.dispatch(UIActions.toggleExpanded());
  }
}
