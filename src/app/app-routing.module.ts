import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/auth-layout/login/login.component';
import { ListeFacturesComponent } from './layouts/client-layout/liste-factures/liste-factures.component';

const routes: Routes = [
  // {path:'auth',loadChildren: ()=>import('./layouts/auth-layout/auth-layout.module').then(m=>m.AuthLayoutModule)},
  { path: 'client', loadChildren: () => import('./layouts/client-layout/client-layout.module').then(m => m.ClientLayoutModule) },
  { path: 'admin', loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) },
  //Auth
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
      },
      {
        path: 'auth',
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)

      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
