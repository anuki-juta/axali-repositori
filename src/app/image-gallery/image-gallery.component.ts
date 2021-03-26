import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
word = 0 ;
  constructor(private gallery: Gallery) { }
imagesArray = [
{path :'assets/image/12.jpg', index: 0 },
{path :'assets/image/23.jpg', index: 1 },
{path :'assets/image/234.jpg', index: 2 },
{path :'assets/image/4043.jpg', index: 3 },
];


  ngOnInit(): void {
  }
showGallery(index : number){
let prop = { 
  images: [ 
{ path : 'assets/image/12.jpg'},
{ path : 'assets/image/23.jpg'},
{ path : 'assets/image/234.jpg'},
{ path : 'assets/image/4043.jpg'}
],
  index
};
this.gallery.load(prop);

}
}
