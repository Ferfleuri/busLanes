import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleMaps } from '@ionic-native/google-maps';
import { GoogleMap, MapType } from '@capacitor/google-maps';
import { map } from 'rxjs';



@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {

  constructor() { }

  map?: google.maps.Map;
  center?: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    zoom: 16
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {

      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // this.map = new google.maps.Map(document.getElementById('map-canvas'), {
      //   ...this.options,
      //   center: this.center
      // });

    });
  }

}
