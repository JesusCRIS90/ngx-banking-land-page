import { Component, computed, HostBinding, input } from '@angular/core';

import {
  NavItem
} from "../../enums"

@Component({
  selector: 'nav-item',
  imports: [],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  navData = input.required<NavItem>();

  userClass = input<string>('');
  id = input<string>('');

  getLink = computed( () => ( `#${this.navData().link}` ) )

  @HostBinding('class') get hostClasses() {
    return `${this.userClass()}`;
  }

  // Bind id directly to the root element
  @HostBinding('id') get hostId(): string {
    return this.id();
  }
}
