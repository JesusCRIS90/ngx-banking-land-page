import { Component, input } from '@angular/core';

import { 
  GridLayout2DComponent as Grid2D,
  VerticalLayoutComponent as FlexVert
} from "@beexy/ngx-layouts"

import {
  ImageComponent as Image
} from "@beexy/ngx-components"

import { Feature } from '../../enums';

import {
  FeatureCardComponent
} from "../../components/feature-card/feature-card.component"

@Component({
  selector: 'sec-features',
  imports: [FlexVert, Grid2D, Image, FeatureCardComponent],
  templateUrl: './features.component.html'
})
export class FeaturesSection {

  data = input.required<Feature[]>();

  getFeature( index: number ) {
    return this.data()[index];
  }
}
