import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComponentsModule } from '../components/components.module';
import { FireBaseService } from '../services/fire-base.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGlideModule } from 'ngx-glide';

@NgModule({
  declarations: [
    InicioComponent,
    MenuComponent,
    GaleriaComponent,
    ContactoComponent,
  ],
  imports: [CommonModule, ComponentsModule, NgbModule, NgxGlideModule],
  exports: [
    InicioComponent,
    MenuComponent,
    GaleriaComponent,
    ContactoComponent,
  ],
  providers: [FireBaseService],
})
export class PagesModule {}
