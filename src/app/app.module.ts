import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MhwCurrentSetComponent } from './mhw-current-set/mhw-current-set.component';
import { MhwSelectPopComponent } from './mhw-select-pop/mhw-select-pop.component';

@NgModule({
  declarations: [
    AppComponent,
    MhwCurrentSetComponent,
    MhwSelectPopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
