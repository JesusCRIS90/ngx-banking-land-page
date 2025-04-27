import { Component, input } from '@angular/core';

import { 
  GridLayout2DComponent as Grid2D,
} from "@beexy/ngx-layouts"

import {
  RoundIconComponent
} from "@beexy/ngx-components"

import { Operation } from '../../enums';

@Component({
  selector: 'operation-card',
  imports: [Grid2D, RoundIconComponent],
  templateUrl: './operation-card.component.html',
})
export class OperationCardComponent {

  opeation = input.required<Operation>()
  
}
