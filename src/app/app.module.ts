import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MhwCurrentSetComponent } from "./mhw-current-set/mhw-current-set.component";
import { MhwSelectPopComponent } from "./mhw-select-pop/mhw-select-pop.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularSvgIconModule } from "angular-svg-icon";
import { MhwStatsComponent } from "./mhw-stats/mhw-stats.component";
import { MhwFooterComponent } from "./mhw-footer/mhw-footer.component";
import { MhwSavedSetsComponent } from "./mhw-saved-sets/mhw-saved-sets.component";
import { ReplacePipe } from "./pipe/replace.pipe";
import { SharpnessPxlPipe } from "./pipe/sharpness-pxl.pipe";

@NgModule({
  declarations: [
    AppComponent,
    MhwCurrentSetComponent,
    MhwSelectPopComponent,
    MhwStatsComponent,
    MhwFooterComponent,
    ReplacePipe,
    SharpnessPxlPipe,
    MhwSavedSetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
