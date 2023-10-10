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


import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonContent } from '@ionic/angular';

declare var google: {
  maps: {
    MapTypeId: { ROADMAP: any; }; Map: new (arg0: any, arg1: { zoom: number; center: { lat: number; lng: number; }; mapTypeId: any; disableDefaultUI: boolean; }) => any; Marker: new (arg0: {
      position: { lat: any; lng: any; }; map: any; icon: string; // ajuste este caminho para o seu ícone
      animation: any;
    }) => any; Animation: { DROP: any; };
  };
};

@Component({
  selector: 'app-atuali',
    templateUrl: './atuali.page.html',
    styleUrls: ['./atuali.page.scss'],
})
export class AtualiPage {
  @ViewChild('map', { static: true })
  mapElement!: ElementRef;
  @ViewChild(IonContent, { static: true })
  content!: IonContent;

  private map: any;
  private location: any = null;

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {
    this.loadMap();
    this.requestLocationPermissions();
  }

  async loadMap() {
    const mapOptions = {
      zoom: 15,
      center: { lat: 0, lng: 0 },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  async requestLocationPermissions() {
    this.geolocation
      .getCurrentPosition()
      .then((position) => {
        this.setLocation(position);
      })
      .catch((error) => {
        console.error('Error getting location', error);
      });
  }

  setLocation(position: any) {
    this.location = position;
    this.map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });

    const marker = new google.maps.Marker({
      position: { lat: position.coords.latitude, lng: position.coords.longitude },
      map: this.map,
      icon: '/src/assets/logo.png', // ajuste este caminho para o seu ícone
      animation: google.maps.Animation.DROP,
    });

    this.content.scrollToTop();
  }
}


