import { Component, Input, OnInit } from '@angular/core';
import { Restaurante, TypeMenu } from 'src/app/interfaces/restaurante';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  @Input() datos!: Restaurante;
  opcionMenu: number = 0;
  constructor() {}

  ngOnInit(): void {}

  cargarMenu(opcion: number) {
    console.log(opcion);
    console.log(this.datos);
    this.opcionMenu = opcion;
  }
}
