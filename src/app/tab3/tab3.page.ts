import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
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
    lat: -22.5956355,
    lng: -48.8423376,
  };
  markerId!: string;




  constructor() {
  }


  ngAfterViewInit() {
    this.createMap();
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

    this.addMarker(this.center.lat, this.center.lng);
    this.addListeners();

  } catch(e) {
    console.log(e);
  }
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
    });

    await this.newMap,setOnMapClickListener((event) => {
      console.log('setOnMapClickListener',event);
      this.addMarker(event.latitude, event.longitude);
    });

    await this.newMap,setOnMyLocationButtonClickListener((event) => {
      console.log('setOnMyLocationButtonClickListener',event);
      this.addMarker(event.latitude, event.longitude);
    });

    await this.newMap,setOnMyLocationClickListener((event) => {
      console.log('setOnMyLocationClickListener',event);
      this.addMarker(event.latitude, event.longitude);
    });

  }

}

function setOnMapClickListener(arg0: (event: any) => void) {
  throw new Error('Function not implemented.');
}

function setOnMyLocationButtonClickListener(arg0: (event: any) => void) {
  throw new Error('Function not implemented.');
}

function setOnMyLocationClickListener(arg0: (event: any) => void) {
  throw new Error('Function not implemented.');
}

