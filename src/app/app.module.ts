import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MhwCurrentSetComponent } from "./mhw-current-set/mhw-current-set.component";
import { MhwSelectPopComponent } from "./mhw-select-pop/mhw-select-pop.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MhwStatsComponent } from "./mhw-stats/mhw-stats.component";
import { MhwFooterComponent } from "./mhw-footer/mhw-footer.component";
import { ReplacePipe } from "./pipe/replace.pipe";
import { SharpnessPxlPipe } from './pipe/sharpness-pxl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MhwCurrentSetComponent,
    MhwSelectPopComponent,
    MhwStatsComponent,
    MhwFooterComponent,
    ReplacePipe,
    SharpnessPxlPipe
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
