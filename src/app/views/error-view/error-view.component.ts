import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'view-error',
  imports: [],
  templateUrl: './error-view.component.html',
  styleUrl: './error-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorViewComponent { }
