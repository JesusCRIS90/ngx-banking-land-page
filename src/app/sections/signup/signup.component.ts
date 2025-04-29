import { Component } from '@angular/core';

import {
  VerticalLayoutComponent as FlexVert,
  FixedWidthLayoutComponent as FixWidthLayout
} from "@beexy/ngx-layouts"
import { ModalWindowService } from '@beexy/ngx-modals';
import { OpenAccountFormComponent } from '../../forms';

@Component({
  selector: 'sec-signup',
  imports: [FlexVert, FixWidthLayout],
  templateUrl: './signup.component.html',
})
export class SignupSection {

    constructor( private modalService: ModalWindowService ) {}

    openAccount(){
      // this.modalService.open({ component: ModalOpenAccountComponent, data: { message: "Are you sure" } });
      this.modalService.open({ component: OpenAccountFormComponent });
    }
}
