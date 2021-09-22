import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/restaurante';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  @Input() datos!: Restaurante;
  titulo1: string = `Un viaje a las tradiciones`;
  titulo2: string = `Bienvenidos a una experiencia degustativa diferente en donde fusionamos sabores exóticos con tradicionales`;
  constructor() {}

  ngOnInit(): void {}
}
