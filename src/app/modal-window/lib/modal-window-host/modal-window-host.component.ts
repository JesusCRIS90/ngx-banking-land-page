import {
  Component,
  Injector,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';


import { ModalWindowService } from '../services';
import { ModalWindowContainerComponent } from '../modal-window-container/modal-window-container.component';


@Component({
  selector: 'bee-modal-window-host',
  imports: [],
  templateUrl: './modal-window-host.component.html',
})
export class ModalWindowHostComponent implements OnInit {

  @ViewChild('modalHostAnchor', { read: ViewContainerRef, static: true })
  hostAnchor!: ViewContainerRef;

  private containerRef: any = null;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private modalService: ModalWindowService
  ) {}

  ngOnInit(): void {
    this.modalService.modalState$.subscribe((modalData) => {

      this.clearDOMHost();

      if (modalData) {
        this.renderRootModalWindowContainer(modalData.component, modalData.data);
      }

    });

  }

  clearDOMHost() {
    this.hostAnchor.clear();
  }

  async renderRootModalWindowContainer(component: Type<any>, data?: any) {

    const containerRef = this.hostAnchor.createComponent(ModalWindowContainerComponent, {
      injector: this.injector
    });

    this.containerRef = containerRef;

    // Wait for the modalContainer view to be initialized
    await Promise.resolve(); // Microtask trick to ensure view init


    // Subscribe to close signal from the container
    containerRef.instance.closeTriggered.subscribe(() => {
      this.hostAnchor.clear();
      this.modalService.close();
    });

    containerRef.instance.clearContent();
    containerRef.instance.injectContent(component, data);
  }

}
