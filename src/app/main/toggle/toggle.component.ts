import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../../shared/base/base.component';
import * as fromRoot from '../../store/root.reducer';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-toggle',
  standalone: true,
  styleUrls: ['./toggle.component.css'],
  templateUrl: './toggle.component.html',
})
export class ToggleComponent extends BaseComponent implements OnInit {
  expanded$: Observable<boolean>;

  ngOnInit(): void {
    super.ngOnInit();

    this.expanded$ = this.store.select(fromRoot.selectUIExpanded);
  }
}
