import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { GoogleMap, MapType, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';
import { GoogleMaps, GoogleMapsAnimation, MyLocation } from '@ionic-native/google-maps';
import { map } from 'rxjs';

declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sourceLocation = '';
  destinationLocation = '';
  private originMarker?: Marker;
  public destination: any ;

  @ViewChild('startInput')
  startInput!: ElementRef;
  @ViewChild('endInput')
  endInput!: ElementRef;


  @ViewChild('map', { static: false }) mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;
  center: any = {
    lat: -22.624715868355583,
    lng: -48.79210973635069
  };

  markerId!: string;
  public search: string = '';
  private googleAutocomplete: any = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();
  map: any;
  loading: any;

  constructor(private route2: Router) {

  }


  navigateIcon() {
    this.route2.navigate(["/perfil"])
  }

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  ngZone: any;

  ngAfterViewInit() {
    if (typeof google !== 'undefined') {
      // O código que usa "google" aqui
      const map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 13,
        center: { lat: -22.624715868355583, lng: -48.79210973635069 }
      });
    } else {
      console.log('A biblioteca do Google Maps não está disponível.');
    }

  }


  async locate() {
    if (this.newMap) await this.newMap.enableCurrentLocation(true);
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

  async addOriginMarker() {
    try{
      const myLocation: MyLocation = await this.map.getMyLocation();

      await this.map.moveCamera({
        target: myLocation.latLng,
        zoom: 18
      });

      this.map.addMarkerSync({
        title: 'Origem',
        icon: '#000',
        animation: GoogleMapsAnimation.DROP,
        position: myLocation.latLng
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }


  searchChanged() {
    if (!this.search.trim().length)
    return;

    this.googleAutocomplete.getPlacePredictions({ input: this.search}, (predictions: any[]) => {
      this.searchResults = predictions;



    });
  }


  calcRuoute(item: any){
    this.search= '';
    console.log(item);


}
}
