import { Component, input } from '@angular/core';
import { Footer } from '../../enums';

import {
  HorizontalLayoutComponent as FlexHor,
  VerticalLayoutComponent as FlexVert
} from "@beexy/ngx-layouts"

import {
  ImageComponent as Image
} from "@beexy/ngx-components"

import {
  NavItemComponent
} from "../../components/nav-item/nav-item.component"

@Component({
  selector: 'sec-footer',
  imports: [FlexHor, FlexVert, Image, NavItemComponent],
  templateUrl: './footer.component.html',
})
export class FooterSection {

  data = input.required<Footer>();

  getImage() {
    return this.data().logoSrc;
  }

  getNavItem( index: number ){
    return this.data().navItems[ index ];
  }

  getNavItems(){
    return this.data().navItems;
  }
}
