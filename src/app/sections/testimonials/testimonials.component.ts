import { Component, input } from '@angular/core';
import { Testimonial } from '../../enums';

import { 
  VerticalLayoutComponent as FlexVert,
  GridLayout1DComponent as Grid1D
} from "@beexy/ngx-layouts"

import {
  SVGIconComponent as SVG
} from "@beexy/ngx-components"

import {
  TestimonialCardComponent
} from "../../components/testimonial-card/testimonial-card.component"

@Component({
  selector: 'sec-testimonials',
  imports: [FlexVert, Grid1D, SVG, TestimonialCardComponent],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsSection {
  data = input.required<Testimonial[]>();

  currentTestimonial = 0;

  next() {
    this.currentTestimonial += 1;
    this.checkNexIndex();
  }

  previous() {
    this.currentTestimonial -= 1;
    this.checkNexIndex();
  }

  checkNexIndex( ){
    const dataLen = this.data().length;

    if( this.currentTestimonial > dataLen - 1 ){
      this.currentTestimonial = 0; return;
    }

    if( this.currentTestimonial < 0 ){
      this.currentTestimonial = dataLen - 1; return;
    }
  }

  getTestimonial() {
    return this.data()[ this.currentTestimonial ];
  }
}
