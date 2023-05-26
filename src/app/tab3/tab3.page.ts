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
    lat: -22.624715868355583,
    lng: -48.79210973635069
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
        draggable: true
      },
      {
        coordinate: {
          lat: -22.598846013100346,
          lng: -48.79267247677574,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.613496872282262,
          lng: -48.80050887787673,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.607793293529824,
          lng: -48.80561345997716,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.583447795650127,
          lng: -48.80798646884565,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.625587709246492,
          lng: -48.79120994065258,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.62588196721611,
          lng: -48.787840012935455,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.623929327569748,
          lng: -48.788373308590714,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.62220126860164,
          lng: -48.787527094534084,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.622426875802326,
          lng: -48.79251339457737,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.62099021775575,
          lng: -48.789357405540365,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.619388620892558,
          lng: -48.79112005233765,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.615009874333353,
          lng: -48.78927227521008,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.58801307299668,
          lng: -48.812518324544634,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.587744959229497,
          lng: -48.81400541616176,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.586239967723618,
          lng: -48.81539494739898,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.582764858264163,
          lng: -48.816676429341136,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.585120352945477,
          lng: -48.8123110863175,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.585120352945477,
          lng: -48.8123110863175,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.586694226841537,
          lng: -48.81342946197062,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.584008501614456,
          lng: -48.81552815437317,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.589174042633186,
          lng: -48.807719392668155,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.5889950677061,
          lng: -48.807456424158545,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.573474880501493,
          lng:  -48.819039380307295,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.59076066810493,
          lng:  -48.79740959975708,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.594924614833243,
          lng:  -48.79896283149719,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.573591571399124,
          lng:  -48.81897167657231,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.574856008811278,
          lng: -48.8181151098313,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.576010501842266,
          lng: -48.81701156432866,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.57590491488931,
          lng: -48.816991996631195,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.57754902555634,
          lng: -48.815296564593574,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.577247244694753,
          lng:  -48.81551719418729,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.62421177533416,
          lng: -48.79248765205062,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.623716809228725,
          lng: -48.79306817043952,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.607974453192707,
          lng: -48.80484327087303,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.60512436507904,
          lng: -48.80458349876632,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.603339907045154,
          lng: -48.809336752842924,
        },
        draggable: true
      },
      {
        coordinate: {
          lat:-22.60566658443118,
          lng: -48.81027477411886,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.590833875685423,
          lng: -48.78380701386625,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.604021896174906,
          lng: -48.80621820838937,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.599390866232643,
          lng: -48.78428589593086,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.598894022245155,
          lng: -48.78581641103319,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.600015131688327,
          lng: -48.78202985604387,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.59952995243331,
          lng: -48.781489446792904,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.599180872756047,
          lng: -48.7811157214681,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.60222274201286,
          lng: -48.78456930006808,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.601548036501924,
          lng: -48.78703730087054,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.597626606605857,
          lng: -48.782268255546434,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.601146037411944,
          lng: -48.78334766318692,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.60586531428776,
          lng: -48.78672742269929,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.613967123005935,
          lng: -48.79296494595997,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.612812491973774,
          lng: -48.791561551026135,
        },
        draggable: true
      },
      {
        coordinate: {
          lat: -22.604249883557735,
          lng: -48.79997668921793,
        },
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


