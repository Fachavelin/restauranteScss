import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/restaurante';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public smPresionado: boolean = false;
  public abierto: boolean = false;

  @Input() datos!: Restaurante;
  constructor() {}

  ngOnInit(): void {}

  abrir(): void {
    this.smPresionado = !this.smPresionado;
    if (this.smPresionado === true) {
      this.abierto = !this.abierto;
    }
    if (this.smPresionado === false) {
      setTimeout(() => {
        this.abierto = !this.abierto;
      }, 800);
    }
  }
}
