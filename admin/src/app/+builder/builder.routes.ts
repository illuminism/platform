import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './builder.component';
import { ModuleWithProviders } from '@angular/core';
import { NavigationResolve } from '../navigation/navigation.resolve';
import { BuilderResolve } from './builder.resolve';

export const builderRoutes: Routes = [
  {
    path: 'builder',
    component: BuilderComponent,
    resolve: {
      routeState: NavigationResolve,
      builderState: BuilderResolve
    }
  },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(builderRoutes);
