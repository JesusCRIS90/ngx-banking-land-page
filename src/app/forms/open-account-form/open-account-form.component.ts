import { Component, input } from '@angular/core';

import {
  VerticalLayoutComponent as FlexVert,
  VERTICAL_POLICY_POSITION as FLEX_POLICY
} from "@beexy/ngx-layouts"

import {
  TitleComponent as Title
} from "@beexy/ngx-components"

import {
  InputFieldComponent,
  InputFieldConfig
} from "../../components"

@Component({
  selector: 'app-open-account-form',
  imports: [FlexVert, Title, InputFieldComponent],
  templateUrl: './open-account-form.component.html',
})
export class OpenAccountFormComponent {
  FLEX_POLICY = FLEX_POLICY;

  inputFields = input<InputFieldConfig[]>( fields );

  getFieldConfig( index: number ){
    return this.inputFields()[index];
  }

  onClickButtonEvent( event: MouseEvent ){
    event.preventDefault();
    event.stopPropagation();
  }
}


const fields: InputFieldConfig[] = [
  {
    text: "First Name:",
    type: "text",
  },
  {
    text: "Email Address:",
    type: "text",
  },
  {
    text: "Password:",
    type: "password",
  }
]