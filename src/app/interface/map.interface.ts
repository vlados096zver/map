
export  interface MapData {
  options: google.maps.MapOptions;
  markers: MapMarker[];
  circles: MapCircle[];
  markersOptions: MarkerOptions
}

export interface MapMarker {
  lat: number;
  lng: number;
  icon: string;
  labelOptions: {
    color: string;
    fontSize: string;
    text: string;
  };
}

export interface MapCircle {
  center: {
    lat: number;
    lng: number;
  };
  radius: number;
  color: string;
}

export interface MarkerOptions {
  scaledSize?: MarkerScaledSizeOptions;
  labelOrigin?: MarkerLabelOriginOptions;
}

export interface MarkerOptionsResult {
  scaledSize?: google.maps.Size;
  labelOrigin?: google.maps.Point;
}
export interface MarkerScaledSizeOptions {
  width?: number;
  height?: number;
}

export interface MarkerLabelOriginOptions {
  x?: number;
  y?: number;
}

export interface LabelOptions {
  text: string;
  fontSize: string;
  color: string;
  className?: string;
}
