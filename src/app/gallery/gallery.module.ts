import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImagesComponent } from './images/images.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, ImagesComponent, AboutComponent, LoginComponent, GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    ReactiveFormsModule
  ]
})
export class GalleryModule { }
