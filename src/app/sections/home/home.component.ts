import { Component } from '@angular/core';

import {
  GridLayout1DComponent as Grid1D
} from "@beexy/ngx-layouts"

import {
  ImageComponent as Image,
  TitleComponent as Title,
  TYPOGRAPHY_LEVEL as TYPO_LVL
} from "@beexy/ngx-components"

@Component({
  selector: 'sec-home',
  imports: [Grid1D, Title, Image],
  templateUrl: './home.component.html',
})
export class HomeSection {
  TYPO_LVL = TYPO_LVL;
}
