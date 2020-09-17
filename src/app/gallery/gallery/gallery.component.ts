import { GalleryService } from './../../services/gallery.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public galleryImages: any;
  constructor(
    private galleryService: GalleryService,
    private storageService: StorageService,
    private router: Router
  ) {
    if (!this.storageService.getItem('isLoggedIn')) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.getGalleryImages();
  }

  getGalleryImages() {
    this.galleryService.getGalleryImages().subscribe(res => {
      this.galleryImages = res;
    });
  }
}
