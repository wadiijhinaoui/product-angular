import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [


    NavBarComponent,
    SideBarComponent,
    ListFactureComponent,
    ProductListComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ReactiveFormsModule,
    AngularFileUploaderModule

  ]
})
export class AdminLayoutModule {

}



