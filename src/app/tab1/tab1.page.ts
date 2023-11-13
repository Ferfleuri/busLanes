import { Component, ElementRef, ViewChild, NgZone, OnInit } from '@angular/core';
import {  MapType, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { Route, Router } from '@angular/router';
import { Geocoder } from '@ionic-native/google-maps/ngx';
import { Environment, GoogleMapOptions, GoogleMaps, GoogleMapsAnimation, GoogleMapsEvent, ILatLng, MyLocation, GoogleMap } from '@ionic-native/google-maps';
import { map } from 'rxjs';
import { LoadingController, Platform } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  sourceLocation = '';
  destinationLocation = '';
  private originMarker?: Marker;
  public destination: any ;

  @ViewChild('startInput')
  startInput!: ElementRef;
  @ViewChild('endInput')
  endInput!: ElementRef;


  @ViewChild('map') mapElement: any;
  newMap!: GoogleMap;
  center: any = {
    lat: -22.624715868355583,
    lng: -48.79210973635069
  };

  markerId!: string;
  public search: string = '';
  private googleAutocomplete: any = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();
  private map: GoogleMap ;
  loading: any;

  constructor(
    private plataform: Platform,
    private loadinCtrl: LoadingController,
    private ngZone: NgZone,
    private route2: Router,
  )
   {}

   ngOnInit() {
     this.mapElement = this.mapElement.nativeElement;
     this.mapElement.style.width = this.plataform.width;
     this.mapElement.style.height = this.plataform.height;

     this.loadMap()
   }

   loadMap() {
     this.loading = this.loadinCtrl.create({message: "Por favor, aguarde"})
     this.loading.present();

     Environment.setEnv({
       'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAe8y7T8so2J-vGZyqGNUwMeo-jz31BFQc',
       'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAe8y7T8so2J-vGZyqGNUwMeo-jz31BFQc'
     });

     const mapOptions: GoogleMapOptions = {
       controls: {
         zoom: false
       }
     }

     this.map = GoogleMaps.create(this.mapElement, mapOptions)

     try {
       this.map.one(GoogleMapsEvent.MAP_READY);
       this.addOriginMarker();
     } catch(error) {
       console.log(error)
     }

       this.addOriginMarker() {
        try{
          const myLocation: MyLocation = this.map.getMyLocation();

          this.map.moveCamera({
            target: myLocation.latLng,
            zoom: 18
          });

          this.map.addMarkerSync({
            title: 'origin'
          })
        }catch(error){
          console.log(error)
        } finally {
          this.loading.dismiss();
        }
      }
   }




  navigateIcon() {
    this.route2.navigate(["/perfil"])
  }

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

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
      const myLocation: MyLocation = await this.map?.GetMyLocation();

      await this.map?.moveCamera({
        target: myLocation.latLng,
        zoom: 18
      });

      this.originMarker = this.map?.addMarker({
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

  async calcRoute(item: any){
    this.search= '';
    this.destination = item ;

    let geocoder = new google.maps.Geocoder();
    const info: any = await geocoder.geocode({address: this.destination.description});



    let markerDestination: Marker | undefined;

    if (this.map) {
      markerDestination = this.map.addMarkers({
        title: this.destination.description,
        icon: '#000',
        animation: GoogleMapsAnimation.DROP,
        position: info[0].position
      });
    }


      if (this.map && this.originMarker) {
        const posLat = markerDestination?.coordinate.lat;
        const posLng = markerDestination?.coordinate.lng

        const positionMarker: ILatLng = {
          lat: posLat || 0,
          lng: posLng || 0
        }

        console.log(positionMarker)

        const posLatO = this.originMarker.coordinate.lat
        const posLngO = this.originMarker.coordinate.lng

        const positionOrigin: ILatLng = {
          lat: posLatO || 0,
          lng: posLngO || 0
        }

        console.log(positionOrigin)

        this.map.addPolyline({
          points: [positionOrigin, positionMarker],
          color: '#000',
          width: 3
        });
      }

}
}
