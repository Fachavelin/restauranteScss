import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/restaurante';
import { FireBaseService } from 'src/app/services/fire-base.service';

import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  /* map!: Map; */
  lat = -0.907637660218041;
  lng = -89.5986557006836;
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
