import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutletRoutingModule } from './outlet-routing.module';
import { OutletFormComponent } from './outlet-form/outlet-form.component';


@NgModule({
  declarations: [
    OutletFormComponent
  ],
  imports: [
    CommonModule,
    OutletRoutingModule
  ]
})
export class OutletModule { }
