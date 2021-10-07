import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/restaurante';
import { FireBaseService } from 'src/app/services/fire-base.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
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
