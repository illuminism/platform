import { NgModule } from '@angular/core';

import { BuilderComponent } from './builder.component';
import { routing } from './builder.routes';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import * as builder from './reducers';
import { NavigationResolve } from '../navigation/navigation.resolve';
import { NavigationModule } from '../navigation/navigation.module';
import { BrowserModule } from '@angular/platform-browser';
import { BuilderResolve } from './builder.resolve';


export const reducers: ActionReducerMap<any> = {
  builder: builder.reducer,
};


@NgModule({
  imports: [
    routing,
    BrowserModule,
    NavigationModule,
    StoreModule.forFeature('builder', reducers),
  ],
  exports: [],
  declarations: [BuilderComponent],
  providers: [NavigationResolve, BuilderResolve],
})
export class BuilderModule {
}
