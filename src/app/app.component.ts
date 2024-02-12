import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GoogleMap';
  markers:any[]=[]
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  currentLat ;
  currentLon ;
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        
        lng: position.coords.longitude,
      };
      this.currentLat = position.coords.latitude
      this.currentLon = position.coords.longitude
      this.markers.push({
        position: {
          lat: this.currentLat + ((Math.random() - 0.5) * 2) / 10,
          lng: this.currentLon + ((Math.random() - 0.5) * 2) / 10,
        },
        label: {
          color: 'red',
          text: 'Marker label ' + (this.markers.length + 1),
        },
        title: 'Marker title ' + (this.markers.length + 1),
        options: { animation: google.maps.Animation.BOUNCE },
        });
      });
  }
}
