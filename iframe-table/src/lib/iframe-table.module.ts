import { NgModule } from '@angular/core';
import { IframeTableComponent } from './iframe-table.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    IframeTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IframeTableComponent
  ]
})
export class IframeTableModule { }
