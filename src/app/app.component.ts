import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Restaurante } from './interfaces/restaurante';
import { FireBaseService } from './services/fire-base.service';
import { fader, slider } from './route-animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider],
})
export class AppComponent {
  lat = 51.678418;
  lng = 7.809007;
  title = 'restauranteScss';
  datos!: Restaurante;
  constructor(private firebase: FireBaseService) {
    this.firebase.cargarDatos().subscribe(
      (datos) => {
        this.datos = datos;
      },
      (err) => {}
    );
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
