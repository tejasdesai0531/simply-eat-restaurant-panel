import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutletFormComponent } from './outlet-form/outlet-form.component';

const routes: Routes = [
  { path: '', component: OutletFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutletRoutingModule { }
