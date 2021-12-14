import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';
import { ProductsFrontComponent } from './products-front/products-front.component';
const routes: Routes = [

  { path: 'listeFactures', component: ListeFacturesComponent },
  { path: 'frontProducts', component: ProductsFrontComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLayoutRoutingModule { }
