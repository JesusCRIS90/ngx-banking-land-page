import { Component, input } from '@angular/core';
import { Testimonial } from '../../enums';


import {
  GridLayout1DComponent as Grid1D,
  ItemGridLayoutComponent as ItemGrid,
  POLICY_POSITION as POLICY
} from "@beexy/ngx-layouts"
import { ImageComponent as Image } from '@beexy/ngx-components';

@Component({
  selector: 'testimonial-card',
  imports: [Grid1D, ItemGrid, Image],
  templateUrl: './testimonial-card.component.html',
})
export class TestimonialCardComponent {
  POLICY = POLICY;

  testomonial = input.required<Testimonial>();

  getTitle() { return this.testomonial().title; }
  getText() { return this.testomonial().text; }
  getPersonImage() { return this.testomonial().person.img; }
  getPersonName() { return this.testomonial().person.name; }
  getPersonCountry() { return this.testomonial().person.country; }
}
