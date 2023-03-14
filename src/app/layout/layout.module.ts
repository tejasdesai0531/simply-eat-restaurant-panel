import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsProviderModule } from '../icons-provider.module';

@NgModule({
  declarations: [
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule
  ]
})
export class LayoutModule { }
