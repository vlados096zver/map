import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsServiceModule} from "./google-maps-service.module";
import { GoogleMapComponent} from "../components/google-map/google-map.component";

@NgModule({
  imports: [CommonModule, GoogleMapsModule, GoogleMapsServiceModule],
  declarations: [GoogleMapComponent],
  exports: [GoogleMapComponent],
})
export class GoogleMapsSharedModule {}
