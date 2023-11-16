import { Component, ElementRef, ViewChild, NgZone, OnInit } from '@angular/core';
import {  MapType, Marker, GoogleMap, Polyline } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { Route, Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';


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

  // public data = [
  //   'Linha 1',
  //   'Linha 2',
  //   'Linha 5',
  //   'Linha 6',
  //   'Linha 7',
  //   'Linha 8',
  //   'Linha 10',
  //   'Linha 11',
  //   'Linha 15',
  //   'Linha 19',
  // ];
  // public results = [...this.data];

  // handleInput(event:any) {
  //   const query = event.target.value.toLowerCase();
  //   this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  // }

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




  async criarLinha() {
    const polyline: Polyline[] = [
     {
      path: [
        {lat: -22.602027, lng: -48.812962},
        {lat: -22.606719, lng: -48.798517},
        {lat: -22.607462, lng: -48.798305},
        {lat: -22.612898, lng: -48.800939},
        {lat: -22.617700, lng: -48.797683},
        {lat: -22.622756, lng: -48.793404},
        {lat: -22.614468, lng: -48.789003},
        {lat: -22.606075, lng: -48.784422},
        {lat: -22.605893, lng: -48.783769},
        {lat: -22.605318, lng: -48.783557},
        {lat: -22.603469, lng: -48.781402},
        {lat: -22.603119, lng: -48.781812},
        {lat: -22.601060, lng: -48.779399}

      ],
      strokeColor: "#1E90FF",
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
