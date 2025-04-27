import { Component, inject, signal } from '@angular/core';

import {
  HeaderSection,
  HomeSection,
  FeaturesSection,
  OperationsSection,
  TestimonialsSection,
  FooterSection,
  SignupSection
} from "../../sections"
import { StoragesManager } from '@beexy/tools';

import {
  AppData,
  Header,
  Feature,
  Operation,
  Testimonial,
  Footer,
} from '../../enums';

import { DATA_KEY } from '../../utils/common-data';

@Component({
  selector: 'view-app',
  imports: [
    HeaderSection,
    HomeSection,
    FeaturesSection,
    OperationsSection,
    TestimonialsSection,
    FooterSection,
    SignupSection
  ],
  templateUrl: './app-view.component.html',
})
export class AppViewComponent {
  private storage = inject(StoragesManager);
  protected appData: AppData | undefined = undefined;

  loadedData = signal<boolean>(false);

  constructor() {
    this.getDataFromStorage();
  }

  getHeaderData():Header{
    return this.appData!.header;
  }
  getFeaturesData():Feature[]{
    return this.appData!.features;
  }
  getOperationsData():Operation[]{
    return this.appData!.operations;
  }
  getTestimonialsData():Testimonial[]{
    return this.appData!.testimonials;
  }
  getFooterData():Footer{
    return this.appData!.footer;
  }

  protected getDataFromStorage() {

    const data = this.storage.getStorageDataFromKey<AppData>(DATA_KEY);

    if (data !== null) {
      this.appData = data;
      this.loadedData.set(true);
      return;
    }

    this.loadedData.set(false);
    return;
  }
}
