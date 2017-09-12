import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(dashboardRoutes);