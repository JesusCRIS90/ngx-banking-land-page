import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';

import {
  ModalData
} from '../interface'

@Injectable({ providedIn: 'root' })
export class ModalWindowService {

  private modalSubject = new Subject<ModalData | null>();

  modalState$ = this.modalSubject.asObservable();

  constructor() {}

  open(component: Type<any>, data?: any) {
    this.modalSubject.next({ component, data });
  }

  close() {
    this.modalSubject.next(null);
  }

}


