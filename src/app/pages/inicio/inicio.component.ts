import { Component, OnInit } from '@angular/core';

import { Restaurante } from 'src/app/interfaces/restaurante';
import { FireBaseService } from 'src/app/services/fire-base.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [],
})
export class InicioComponent implements OnInit {
  datos!: Restaurante;
  constructor(private firebase: FireBaseService) {
    this.firebase.cargarDatos().subscribe(
      (datos) => {
        this.datos = datos;
      },
      (err) => {}
    );
  }

  ngOnInit(): void {}
}
