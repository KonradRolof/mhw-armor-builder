import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MhwCurrentSetComponent } from './mhw-current-set/mhw-current-set.component';
import { MhwSelectPopComponent } from './mhw-select-pop/mhw-select-pop.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { MhwStatsComponent } from './mhw-stats/mhw-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    MhwCurrentSetComponent,
    MhwSelectPopComponent,
    MhwStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
