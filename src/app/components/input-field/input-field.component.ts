import { Component, input } from '@angular/core';

import {
  PairLayoutComponent as PairLayout,
  PAIR_DISTRIBUTION as POLICY
} from "@beexy/ngx-layouts"

export interface InputFieldConfig {
  text: string;
  type: 'text' | 'password';
}

@Component({
  selector: 'input-field',
  imports: [PairLayout],
  templateUrl: './input-field.component.html',

})
export class InputFieldComponent {

  POLICY = POLICY;

  config = input.required<InputFieldConfig>();

  getText(): string{
    return this.config().text;
  }

  getType(): string{
    return this.config().type;
  }
}
