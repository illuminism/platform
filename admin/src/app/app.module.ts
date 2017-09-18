import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BuilderModule } from './+builder/builder.module';
import { DashboardModule } from './+dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BuilderModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
