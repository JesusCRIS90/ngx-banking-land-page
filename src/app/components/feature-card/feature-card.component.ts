import { Component, input } from '@angular/core';
import { Feature } from '../../enums';

import {
  SVGIconComponent as SVG,
  RoundIconComponent as RoundIcon
} from "@beexy/ngx-components"

@Component({
  selector: 'feature-card',
  imports: [RoundIcon],
  templateUrl: './feature-card.component.html',
})
export class FeatureCardComponent {
  feature = input.required<Feature>();
}
