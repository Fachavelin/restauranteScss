import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { FirstComponentComponent } from './inicio/first-component/first-component.component';
import { SecondComponentComponent } from './inicio/second-component/second-component.component';
import {
  NgbAlertModule,
  NgbModule,
  NgbCarouselConfig,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgxGlideModule } from 'ngx-glide';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { BodyComponent } from './menu/body/body.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SliderComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    NgxGlideModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    SliderComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    BodyComponent,
  ],
  providers: [NgbCarouselConfig],
})
export class ComponentsModule {}
