import { NgModule } from '@angular/core';

import { BuilderComponent } from './builder.component';
import { routing } from './builder.routes';
import { StoreModule } from '@ngrx/store';
import * as builder from './reducers';
import { NavigationResolve } from '../navigation/navigation.resolve';
import { NavigationModule } from '../navigation/navigation.module';
import { BrowserModule } from '@angular/platform-browser';
import { BuilderResolve } from './builder.resolve';

@NgModule({
  imports: [
    routing,
    BrowserModule,
    NavigationModule,
    StoreModule.forRoot({builder: builder.reducer}),
  ],
  exports: [],
  declarations: [ BuilderComponent ],
  providers: [NavigationResolve, BuilderResolve],
})
export class BuilderModule {
}
