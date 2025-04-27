import { Component, input } from '@angular/core';

import {
  FloatingLayoutComponent as FloatLayout,
  PairLayoutComponent as RelativeLayout,
  HorizontalLayoutComponent as FlexHori,
  PAIR_DISTRIBUTION as POLICY,
  POLICY_POSITION as ANCHOR_POINT
} from "@beexy/ngx-layouts"

import {
  ImageComponent as Image
} from "@beexy/ngx-components"


import {
  NavItemComponent
} from "../../components"

import { Header, NavItem } from "../../enums"

@Component({
  selector: 'sec-header',
  imports: [RelativeLayout, FloatLayout, FlexHori, NavItemComponent, Image],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderSection {

  POLICY = POLICY;
  ANCHOR_POINT = ANCHOR_POINT;

  data = input.required<Header>();

  getLogoImage():string{
    return this.data().logoImg;
  }

  getLogoName():string{
    return this.data().logoName;
  }
  
  getNavItem( index: number ):NavItem{
    
    if( index > this.getAmountNavItems() - 1 ) return {} as NavItem;

    return this.data().navItems[index];
  }

  getAmountNavItems(): number {
    return this.data().navItems.length;
  }

  openAccount(){
    console.log('Open an Account')
  }
}
