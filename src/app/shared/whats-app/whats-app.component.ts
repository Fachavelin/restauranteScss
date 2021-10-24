import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-app',
  templateUrl: './whats-app.component.html',
  styleUrls: ['./whats-app.component.scss'],
})
export class WhatsAppComponent implements OnInit {
  link: string =
    'https://api.whatsapp.com/send?phone=593982291894&text=Hola%2C+acabo+de+ver+tu+anuncio+estoy+interesado+en+contactarme+contigo';
  visible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = !this.visible;
    }, 1500);
  }
}
