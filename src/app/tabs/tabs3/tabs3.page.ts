import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabs3',
  templateUrl: './tabs3.page.html',
  styleUrls: ['./tabs3.page.scss'],
})
export class Tabs3Page implements OnInit {

  images: string[] = [
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/3.jpg',
    '/assets/4.jpg',
    '/assets/5.jpg',
    '/assets/6.jpg'
    // Agrega más imágenes según sea necesario
  ];

  constructor() { }

  ngOnInit() {
  }

}
