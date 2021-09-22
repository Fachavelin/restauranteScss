import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGlideModule } from 'ngx-glide';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { FireBaseService } from './services/fire-base.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGlideModule,
    SharedModule,
    PagesModule,
    ComponentsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [FireBaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
