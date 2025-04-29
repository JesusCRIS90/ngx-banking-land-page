import { Component, ElementRef, EventEmitter, Output, Type, ViewChild, ViewContainerRef } from '@angular/core';

import {
  ModalWindowService
} from '../services'

@Component({
  selector: 'bee-modal-win-cont',
  imports: [],
  templateUrl: './modal-window-container.component.html',
  styleUrls: ['./modal-window-container.component.css']
})
export class ModalWindowContainerComponent {

  @ViewChild('modalContainer', { read: ViewContainerRef, static: true })
  modalContainer!: ViewContainerRef;

  @Output()
  closeTriggered = new EventEmitter<void>();

  constructor(public elementRef: ElementRef) {}

  clearContent() {
    this.modalContainer.clear();
  }

  injectContent(component: Type<any>, data?: any) {
    const compRef = this.modalContainer.createComponent(component);
    if (data) {
      Object.assign(compRef.instance, data);
    }
  }

  // Close modal when clicking outside
  closeModal(event?: MouseEvent) {
    if (event && event.target === event.currentTarget) {
      this.closeTriggered.emit();
    } else if (!event) {
      this.closeTriggered.emit();  // Close if "X" is clicked
    }
  }

  clicInsideModal(event: MouseEvent) {
    event.stopPropagation();
  }

}
