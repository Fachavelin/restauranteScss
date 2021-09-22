import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/restaurante';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() datos!: Restaurante;

  constructor() {}

  ngOnInit(): void {}
}
