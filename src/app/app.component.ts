import { Component, inject, OnInit, signal } from '@angular/core';

import { 
  loadSVGIcons,
  StoragesManager,
  addValue2Storage
} from "@beexy/tools"

import { ModalWindowHostComponent } from "@beexy/ngx-modals"

import {
  loadData
} from "./utils/loadJSONData"

import {
  SVGs_PATH,
  DATA_PATH,
  DATA_KEY
} from "./utils/common-data"

import {
  AppData
} from "./enums/data.enums"

import {
  AppViewComponent,
  ErrorViewComponent
} from "./views"


@Component({
  selector: 'app-root',
  imports: [AppViewComponent, ErrorViewComponent, ModalWindowHostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  
  title = 'A Bacnk for Life';
  
  private storage = inject(StoragesManager);
  
  dataErrorLoading = signal<boolean>( true );

  constructor() {}

  ngOnInit(): void {

    loadSVGIcons(SVGs_PATH);
    this.loadData( DATA_PATH );

    console.log( this.storage );
  }

  protected async loadData( path: string ) {
    
    const response = await loadData( path );

    if( response.fail ){
      // console.log("Error Loading App Data");
      this.dataErrorLoading.set( true );
      return;
    }

    if( this.StorageDataApp( response.originalData ) ){
      this.dataErrorLoading.set( false );
      return;
    }
  }

  protected StorageDataApp( data: Object ): boolean {

    // TODO: On this process an checker/adaptor function must be applied to assure
    // data injected on App has the Interface that App is expecting
    const data2Storage: AppData = data as AppData;

    addValue2Storage<AppData>( this.storage, DATA_KEY, data2Storage );



    return true;
  }

}
