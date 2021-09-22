import { Component } from '@angular/core';
import { Restaurante } from './interfaces/restaurante';
import { FireBaseService } from './services/fire-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
}
