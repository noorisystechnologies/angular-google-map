# GoogleMap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




## Google Map Locaction

The Google Maps module can be installed from @angular/google-maps.

npm install @angular/google-maps

When the installation is finished, we must add the Angular module GoogleMapsModule to the import declaration.

import { GoogleMapsModule } from '@angular/google-maps'

  imports: [ GoogleMapsModule],


After that past the bellow api in the index.html file 


API of Google Map
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

By adding the Google Maps component to a template we can already see and use the Google Map. The map will behave as a default map with the default functionality, for example, you can zoom in and out, and drag in the map.

after finshing  api part wirte bellow code in your exaple.component.html file 

<google-map  height="500px" width="100%" [zoom]="zoom" [center]="center" [options]="options">
<map-marker *ngFor="let marker of markers" [position]="marker.position" [label]="marker.label" 
 [title]="marker.title" [options]="marker.options"></map-marker>
</google-map>

after finsing it pest bellow code in your example.component.ts 
inside the export class component {
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