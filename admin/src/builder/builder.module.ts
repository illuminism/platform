import { NgModule } from '@angular/core';

import { BuilderComponent } from './builder.component';
import { routing } from './builder.routes';

@NgModule({
  imports: [routing],
  exports: [],
  declarations: [BuilderComponent],
  providers: [],
})
export class BuilderModule {
}
