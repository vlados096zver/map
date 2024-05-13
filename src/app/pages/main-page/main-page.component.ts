import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {MapData} from "../../interface/map.interface";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

  public LABEL_STYLES = {
    color: '#18D979',
    fontSize: '14px'
  };

  public mapData: MapData = {
    options: {
      center: {
        lat: 50.4501,
        lng: 30.5234,
      },
      zoom: 14,
    },
    markers: [
      {
        lat: 50.4501,
        lng: 30.5234,
        icon: '../assets/img/pin.svg',
        labelOptions: {
         ...this.LABEL_STYLES,
          text: 'Tagged Location 1'
        },
      },
      {
        lat: 52.4501,
        lng: 31.5234,
        icon: '../assets/img/pin.svg',
        labelOptions: {
          ...this.LABEL_STYLES,
          text: 'Tagged Location 2'
        }
      },
      {
        lat: 51.4501,
        lng: 30.5234,
        icon: '../assets/img/pin.svg',
        labelOptions: {
          ...this.LABEL_STYLES,
          text: 'Tagged Location 3'
        }
      },
    ],
    markersOptions: {
      scaledSize: {
        width: 30,
        height: 30
      },
      labelOrigin: {
        x: 15,
        y: 54
      }
    },
    circles: [
      {
        center: {
          lat: 50.7501,
          lng: 30.8234
        },
        radius: 5000,
        color: 'rgba(0, 255, 97, 0.9)'
      },
      {
        center: {
          lat: 50.7501,
          lng: 27.8234
        },
        radius: 5000,
        color: 'rgba(0, 255, 97, 0.9)'
      },
      {
        center: {
          lat: 50.9501,
          lng: 30.9234
        },
        radius: 5000,
        color: 'rgba(255, 3, 27, 0.9)'
      },
    ]
  };

}
