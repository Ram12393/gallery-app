import { GalleryService } from './../../services/gallery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  public images: any;
  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit(): void {

    this.getImages();
  }
  getImages() {
    this.galleryService.getImages().subscribe(res => {
      console.log(res);
      this.images = res;
    });
  }
}
