import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { GoogleMap, MapType } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';
import { map } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sourceLocation = '';
  destinationLocation = '';


  @ViewChild('startInput')
  startInput!: ElementRef;
  @ViewChild('endInput')
  endInput!: ElementRef;


  @ViewChild('map', { static: false }) mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;
  center: any = {
    lat: -22.5956355,
    lng: -48.8423376,
  };

  markerId!: string;


  constructor(public route: Router) {
  }

  navigateIcon() {
    this.route.navigate(["/perfil"])
  }

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  ngZone: any;

  ngAfterViewInit() {
    if (typeof google !== 'undefined') {
      // O código que usa "google" aqui
      const map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 7,
        center: { lat: -22.6070092, lng: -48.797338 }
      });
    } else {
      console.log('A biblioteca do Google Maps não está disponível.');
    }

    // this.createMap();
    // this.directionsRenderer.setMap(new google.maps.Map(map, {
    //   zoom: 7,
    //   center: { lat: -22.6016421, lng: -48.8004461 } // Ponto de partida padrão
    // }));
  }


  async locate() {
    if(this.newMap) await this.newMap.enableCurrentLocation(true);
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

  calculateAndDisplayRoute() {
    const start = (this.startInput.nativeElement as HTMLInputElement).value;
    const end = (this.endInput.nativeElement as HTMLInputElement).value;

    this.directionsService.route({
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    }, (response: any, status: string) => {
      this.ngZone.run(() => {
        if (status === 'OK') {
          this.directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    });
  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);
  };
}

// export const environment = {
 // production: false,
 // googleMapsApiKey: 'SUA_CHAVE_DA_API_AQUI',
// };


