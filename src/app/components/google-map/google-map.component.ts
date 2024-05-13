import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsService} from "../../services/google-maps.service";
import {
  LabelOptions,
  MapData,
  MapMarker,
  MarkerOptionsResult
} from "../../interface/map.interface";
import {Calculator} from "@angular/google-maps";
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class GoogleMapComponent implements OnInit {
  @Input() mapData!: MapData;
  public apiLoaded$!: Observable<boolean>;

  constructor(public googleMapsService: GoogleMapsService) {
    this.apiLoaded$ = this.googleMapsService.load();
  }

  ngOnInit(): void {
    this.apiLoaded$.subscribe(loaded => {
      if (loaded) {
        console.log('Google Maps API loaded');
      } else {
        console.log('Google Maps API not loaded');
      }
    });
  }

  public createLabelOptions(marker: MapMarker): LabelOptions {
    return {
      text: marker.labelOptions.text,
      fontSize: marker.labelOptions.fontSize,
      color: marker.labelOptions.color,
      className: "map-label"
    };
  }

  public createMarkerOptions(options: {width?: number, height?: number, x?: number, y?: number}): MarkerOptionsResult {
    const scaledSize = options.width !== undefined && options.height !== undefined ? new google.maps.Size(options.width, options.height) : undefined;
    const labelOrigin = options.x !== undefined && options.y !== undefined ? new google.maps.Point(options.x, options.y) : undefined;
    return {
      scaledSize: scaledSize,
      labelOrigin: labelOrigin
    };
  }

  public customCalculator: Calculator = (markers: any) => {
    const count = markers.length;
    return {
      index: count,
      text: 'Text' + count,
      title: ''+ count,
    };
  };

  public clusterStyles: any = [
    {
      url: '',
      height: 50,
      width: 50
    }
  ];
}
