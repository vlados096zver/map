import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import { GoogleMapsSharedModule} from "./modules/google-maps-shared.module";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsSharedModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
