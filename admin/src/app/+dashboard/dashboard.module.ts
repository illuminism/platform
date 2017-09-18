import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routes';

@NgModule({
  imports: [routing],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {
}
