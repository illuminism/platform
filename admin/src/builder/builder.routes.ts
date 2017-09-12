import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './builder.component';
import { ModuleWithProviders } from '@angular/core';

export const builderRoutes: Routes = [
  {
    path: 'builder',
    component: BuilderComponent
  },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(builderRoutes);