// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-atuali',
//   templateUrl: './atuali.page.html',
//   styleUrls: ['./atuali.page.scss'],
// })
// export class AtualiPage {

//   // constructor(public route: Router) {
//   // }

//   // navigateIcon() {
//   //   this.route.navigate(["/perfil"])
//   // }

// }

import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition} from '@ionic-native/geolocation';
import { GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent, MarkerOptions } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-atuali',
  templateUrl: 'atuali.page.html',
  styleUrls: ['atuali.page.scss'],
})
export class AtualiPage {
  @ViewChild('map', { static: false })
  mapElement!: ElementRef;
  private map!: GoogleMap;
  private location: Geoposition | null = null;

  constructor(private platform: Platform, private geolocation: Geolocation, private ngZone: NgZone) {}

  async ngOnInit() {
    await this.platform.ready();
    this.loadMap();
  }

  async loadMap() {
    const options: GeolocationOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    try {
      const geoposition: Geoposition = await this.geolocation.getCurrentPosition(options);
      this.location = geoposition;
      this.initMap(geoposition);
    } catch (error) {
      console.error('Error getting location', error);
    }
  }

  initMap(geoposition: Geoposition) {
    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: geoposition.coords.latitude,
          lng: geoposition.coords.longitude,
        },
        zoom: 15,
      },
    };

    this.map = GoogleMaps.create(this.mapElement.nativeElement, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.addMarker(geoposition);
    });

    this.geolocation
      .watchPosition
      .subscribe((position: any) => {
        this.ngZone.run(() => {
          this.location = position;
          this.updateMarker(position);
        });
      });
  }

  addMarker(geoposition: Geoposition) {
    const markerOptions: MarkerOptions = {
      position: {
        lat: geoposition.coords.latitude,
        lng: geoposition.coords.longitude,
      },
    };

    this.map.addMarker(markerOptions);
  }

  updateMarker(geoposition: Geoposition) {
    this.map.clear();
    this.addMarker(geoposition);
  }
}
