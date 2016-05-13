export class Address {
  public name: string;
  public address: string;
  public location: Location;

  constructor(name:string, address:string, location?: Location) {
    this.name = name;
    this.address = address;
    this.location = location;
  }
}

export interface GeoCodeResponse {
  results: Array<GeoCodeResult>;
  status: string;
}

export interface GeoCodeResult {
  address_components: Array<AddressComponent>;
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types: Array<string>;
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: Array<string>;
}

export interface Geometry {
  location: Location;
  location_type: string;
  viewport: Viewport;
}

export interface Location {
  lat: Number;
  lng: Number;
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}
