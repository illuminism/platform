import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationComponent } from './navigation.component';
import { MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [ BrowserAnimationsModule, MdToolbarModule ],
  exports: [ NavigationComponent ],
  declarations: [ NavigationComponent ],
  providers: [],
})
export class NavigationModule {
}
