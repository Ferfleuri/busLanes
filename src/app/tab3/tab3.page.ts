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

  defaultMarkerInfo = {
    iconSize: {
      width: 40,
      height: 40
    },
    draggable: false,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3448/3448339.png"
  }


  constructor() {
  }


  ngAfterViewInit() {
    this.createMap();
  }

  async locate() {
    if (this.newMap) await this.newMap.enableCurrentLocation(true);
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

    } catch (e) {
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
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.598846013100346,
          lng: -48.79267247677574,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.613496872282262,
          lng: -48.80050887787673,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.607793293529824,
          lng: -48.80561345997716,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.583447795650127,
          lng: -48.80798646884565,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.625587709246492,
          lng: -48.79120994065258,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.62588196721611,
          lng: -48.787840012935455,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.623929327569748,
          lng: -48.788373308590714,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.62220126860164,
          lng: -48.787527094534084,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.622426875802326,
          lng: -48.79251339457737,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.62099021775575,
          lng: -48.789357405540365,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.619388620892558,
          lng: -48.79112005233765,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.615009874333353,
          lng: -48.78927227521008,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.58801307299668,
          lng: -48.812518324544634,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.587744959229497,
          lng: -48.81400541616176,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.586239967723618,
          lng: -48.81539494739898,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.582764858264163,
          lng: -48.816676429341136,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.585120352945477,
          lng: -48.8123110863175,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.585120352945477,
          lng: -48.8123110863175,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.586694226841537,
          lng: -48.81342946197062,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.584008501614456,
          lng: -48.81552815437317,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.589174042633186,
          lng: -48.807719392668155,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.5889950677061,
          lng: -48.807456424158545,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.573474880501493,
          lng: -48.819039380307295,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.59076066810493,
          lng: -48.79740959975708,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.594924614833243,
          lng: -48.79896283149719,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.573591571399124,
          lng: -48.81897167657231,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.574856008811278,
          lng: -48.8181151098313,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.576010501842266,
          lng: -48.81701156432866,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.57590491488931,
          lng: -48.816991996631195,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.57754902555634,
          lng: -48.815296564593574,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.577247244694753,
          lng: -48.81551719418729,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.62421177533416,
          lng: -48.79248765205062,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.623716809228725,
          lng: -48.79306817043952,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.607974453192707,
          lng: -48.80484327087303,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.60512436507904,
          lng: -48.80458349876632,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.603339907045154,
          lng: -48.809336752842924,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.60566658443118,
          lng: -48.81027477411886,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.590833875685423,
          lng: -48.78380701386625,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.604021896174906,
          lng: -48.80621820838937,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.599390866232643,
          lng: -48.78428589593086,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.598894022245155,
          lng: -48.78581641103319,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.600015131688327,
          lng: -48.78202985604387,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.59952995243331,
          lng: -48.781489446792904,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.599180872756047,
          lng: -48.7811157214681,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.60222274201286,
          lng: -48.78456930006808,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.601548036501924,
          lng: -48.78703730087054,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.597626606605857,
          lng: -48.782268255546434,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.601146037411944,
          lng: -48.78334766318692,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.60586531428776,
          lng: -48.78672742269929,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.613967123005935,
          lng: -48.79296494595997,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.612812491973774,
          lng: -48.791561551026135,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.604249883557735,
          lng: -48.79997668921793,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.603931140026123,
          lng: -48.80085720703503,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.610122039297156,
          lng: -48.80212306920289,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.60532298539124,
          lng: -48.802348977369725,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.613414363520892,
          lng: -48.789790033855034,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.614756570387566,
          lng: -48.78375621609792,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.615611566413012,
          lng: -48.78421629744576,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.61050696711827,
          lng: -48.80284459785568,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.580283435078197,
          lng: -48.80831524858139,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.58428835288636,
          lng: -48.81351816904853,
        },
        ...this.defaultMarkerInfo
      },
      {
        coordinate: {
          lat: -22.58226962463717,
          lng: -48.81525698697291,
        },
        ...this.defaultMarkerInfo,
      },
    ]);
  }

  async addMarker(lat: any, lng: any) {
    this.markerId = await this.newMap.addMarker({
      coordinate: {
        lat: lat,
        lng: lng,
      },
      draggable: false
    })

  }

  async removeMarker(id?: string) {
    await this.newMap.removeMarker(id ? id : this.markerId);
  }

  async addListeners() {

    await this.newMap.setOnMarkerClickListener((event) => {
      console.log('setOnMarkerClickListener', event);
      //this.removeMarker(event.markerId)
    });

    await this.newMap.setOnMapClickListener((event) => {
      console.log('setOnMapClickListener', event);
      this.addMarker(event.latitude, event.longitude);
    });

    await this.newMap.setOnMyLocationButtonClickListener((event) => {
      console.log('setOnMyLocationButtonClickListener', event);
      //this.addMarker(event.latitude, event.longitude);
    });

    await this.newMap.setOnMyLocationClickListener((event) => {
      console.log('setOnMyLocationClickListener', event);
      this.addMarker(event.latitude, event.longitude);
    });

  }

}


