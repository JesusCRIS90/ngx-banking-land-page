import { Component } from '@angular/core';

import {
  VerticalLayoutComponent as FlexVert,
  FixedWidthLayoutComponent as FixWidthLayout
} from "@beexy/ngx-layouts"

@Component({
  selector: 'sec-signup',
  imports: [FlexVert, FixWidthLayout],
  templateUrl: './signup.component.html',
})
export class SignupSection { }
