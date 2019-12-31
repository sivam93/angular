import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  {
    path:'login',
   // loadChildren : () => import('./modules/login/login.module').then(mod => mod.LoginModule),
    loadChildren : './modules/login/login.module#LoginModule'
  },
  {
    path:'dashboard',
    component:LayoutComponent,
    canActivate:[AuthGuardService],
    loadChildren : './modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path:'inputs',
    component:LayoutComponent,
    canActivate:[AuthGuardService],
    loadChildren : './modules/inputs/inputs.module#InputsModule'
  },
  {
    path:'invoice',
    component:LayoutComponent,
    canActivate:[AuthGuardService],
    loadChildren : './modules/invoice/invoice.module#InvoiceModule'
  },
  {
    path:'release',
    component:LayoutComponent,
    canActivate:[AuthGuardService],
    loadChildren : './modules/release/release.module#ReleaseModule'
  },
  {
    path:'collections',
    component:LayoutComponent,
    canActivate:[AuthGuardService],
    loadChildren : './modules/collections/collections.module#CollectionsModule'
  },
  {
    path:'reconcillation',
    component:LayoutComponent,
    canActivate:[AuthGuardService],
    loadChildren : './modules/reconcilation/reconcilation.module#ReconcilationModule'
  },
  {
    path:"",
    redirectTo:"reconcillation",
    pathMatch:'full'
  },
  {
    path:"**",
    redirectTo:"reconcillation",
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { 
        useHash:true,
        preloadingStrategy: PreloadAllModules
        
      }
    )
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
