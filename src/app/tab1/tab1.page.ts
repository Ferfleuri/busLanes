import { Component, ElementRef, ViewChild, NgZone, OnInit } from '@angular/core';
import {  MapType, Marker, GoogleMap, Polyline } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { Route, Router } from '@angular/router';
import { Geocoder } from '@ionic-native/google-maps/ngx';
import { map } from 'rxjs';
import { LoadingController, Platform } from '@ionic/angular';
import { PolylineOptions } from '@ionic-native/google-maps';

declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  sourceLocation = '';
  destinationLocation = '';
  private originMarker?: Marker;
  public destination: any ;

  @ViewChild('startInput')
  startInput!: ElementRef;
  @ViewChild('endInput')
  endInput!: ElementRef;


  @ViewChild('map')
  private mapRef!: ElementRef<HTMLElement>;
  private newMap!: GoogleMap;
  center: any = {
    lat: -22.624715868355583,
    lng: -48.79210973635069
  };

  markerId!: string;
  public search: string = '';
  private googleAutocomplete: any = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();
  loading: any;
  private polyLineId: any;

  constructor(
    private plataform: Platform,
    private loadinCtrl: LoadingController,
    private ngZone: NgZone,
    private route2: Router,
  )
   {}




  navigateIcon() {
    this.route2.navigate(["/perfil"])
  }

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  ngAfterViewInit() {
    if (typeof google !== 'undefined') {
      const map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 13,
        center: { lat: -22.624715868355583, lng: -48.79210973635069 }
      });
      this.createMap(); // Adicione esta linha para inicializar o mapa
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



  searchChanged() {
    if (!this.search.trim().length)
    return;

    this.googleAutocomplete.getPlacePredictions({ input: this.search}, (predictions: any[]) => {
      this.searchResults = predictions;
    });
  }

  // geoCode(adress: any) {
  //   let latlng = {lat: '', lng: ''};
  //   return new Promise((resolve, reject) => {
  //     let geocoder = new google.maps.Geocoder();
  //     geocoder.geocode ({'adress': adress}, (results:any) => {
  //       console.log('results: ', results);
  //       latlng.lat = results[0].geometry.location.lat();
  //       latlng.lng = results[0].geometry.location.lng();
  //       resolve(latlng);
  //     });
  //   });
  // }

  async criarLinha() {
    const polyline: Polyline[] = [
     {
      path: [
        {lat: -22.612898, lng: -48.800939},
        {lat: -22.617365, lng: -48.797785},
        {lat: -22.614468, lng: -48.789003}
      ],
      strokeColor: "#FF0000",
      strokeWeight: 5,
      geodesic: true,
     }
    ];

    if (this.newMap) {
      const result = await this.newMap.addPolylines(polyline);
      this.polyLineId = result[0];
    } else {
      console.error("newMap não está definido. Certifique-se de que foi inicializado corretamente.");
    }
  }


}
