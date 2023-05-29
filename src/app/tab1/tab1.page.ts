import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap, MapType } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;
  center: any = {
    lat: -22.5956355,
    lng: -48.8423376,
  };
  markerId!: string;


  constructor() { }

  ngAfterViewInit() {
    this.createMap();
  }

  async getLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    const latitude = coordinates.coords.latitude;
    const longitude = coordinates.coords.longitude;

    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
  }

  async createMap() {
    try {
      this.newMap = await GoogleMap.create({
        id: 'capacitor-google-maps',
        element: this.mapRef.nativeElement,
        apiKey: environment.google_maps_api_Key,
        config: {
          center: this.center,
          zoom: 13,
        },
      });

      await this.newMap.enableTrafficLayer(true);
      await this.newMap.enableCurrentLocation(true);

    } catch (e) {
      console.log(e);
    }
  }

}
