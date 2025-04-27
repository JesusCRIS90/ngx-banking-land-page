import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Operation } from '../../enums';

import { 
  VerticalLayoutComponent as FlexVert
} from "@beexy/ngx-layouts"

import {
  OperationCardComponent
} from "../../components/operation-card/operation-card.component"

@Component({
  selector: 'sec-operations',
  imports: [FlexVert, OperationCardComponent, CommonModule],
  templateUrl: './operations.component.html',
})
export class OperationsSection {

  data = input.required<Operation[]>();
  tabSelected = signal<number>( 0 );

  tabContent = computed( () => {
    return this.getOperation( this.tabSelected() )
  })

  getOperation( index: number ) {
    return this.data()[index];
  }

  onTabClicked( id: number ) {
    this.tabSelected.set( id );
  }

  isActiveTab( index: number ){
    return this.tabSelected() === index;
  }
}
