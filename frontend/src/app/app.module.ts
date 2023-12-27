import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";

import {MainComponent} from "./components/main/main.component";
import {SearchBarComponent} from "./components/searchbar/searchbar.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {LiveCardComponent} from "./components/livecard/livecard.component";

@NgModule({
  declarations: [
    MainComponent,
    SearchBarComponent,
    NavbarComponent,
    LiveCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})

export class AppModule{}
