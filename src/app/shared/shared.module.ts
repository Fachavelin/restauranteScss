import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { WhatsAppComponent } from './whats-app/whats-app.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WhatsAppComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, WhatsAppComponent],
})
export class SharedModule {}
