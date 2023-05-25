import { Component, ElementRef, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { GoogleMap, MapType } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;
  center: any = {
    lat: -22.624835378524555,
    lng: -48.79198876387481
  };
  markerId!: string;




  constructor() {
  }


  ngAfterViewInit() {
    this.createMap();
  }

  async locate() {
    if(this.newMap) await this.newMap.enableCurrentLocation(true);
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

    await this.newMap.enableCurrentLocation(true);

    this.addMarkers(this.center.lat, this.center.lng);
    this.addListeners();

  } catch(e) {
    console.log(e);
  }
  }

  async addMarkers(lat: any, lng: any) {
    // Add a marker to the map
    // if(this.markerId) this.removeMarker();
    await this.newMap.addMarkers([
      {
        coordinate: {
          lat: lat,
          lng: lng,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.598846013100346,
          lng: -48.79267247677574,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.613259378290675,
          lng: -48.8006895164848,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.607793293529824,
          lng: -48.80561345997716,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.583447795650127,
          lng: -48.80798646884565,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.625587709246492,
          lng: -48.79120994065258,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.62588196721611,
          lng: -48.787840012935455,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.623929327569748,
          lng: -48.788373308590714,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.62220126860164,
          lng: -48.787527094534084,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.622426875802326,
          lng: -48.79251339457737,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.62099021775575,
          lng: -48.789357405540365,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.619388620892558,
          lng: -48.79112005233765,
        },
        // title: ,
        draggable: true
      },
      {
        coordinate: {
          lat: -22.615009874333353,
          lng: -48.78927227521008,
        },
        // title: ,
        draggable: true
      },
    ]);
  }

  async addMarker(lat:any , lng:any) {
    this.markerId = await this.newMap.addMarker ({
      coordinate : {
        lat: lat,
        lng: lng,
      },
      draggable: true
    });

  }

  async removeMarker(id?: string) {
    await this.newMap.removeMarker(id ? id : this.markerId);
  }

  async addListeners() {

    await this.newMap.setOnMarkerClickListener((event) => {
      console.log('setOnMarkerClickListener',event);
      //this.removeMarker(event.markerId)
    });

    await this.newMap.setOnMapClickListener((event) => {
      console.log('setOnMapClickListener',event);
      this.addMarker(event.latitude, event.longitude);
    });

    await this.newMap.setOnMyLocationButtonClickListener((event) => {
      console.log('setOnMyLocationButtonClickListener', event);
      //this.addMarker(event.latitude, event.longitude);
    });

    await this.newMap.setOnMyLocationClickListener((event) => {
      console.log('setOnMyLocationClickListener',event);
      this.addMarker(event.latitude, event.longitude);
    });

  }

}


