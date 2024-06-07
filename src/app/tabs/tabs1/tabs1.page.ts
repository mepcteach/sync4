import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.page.html',
  styleUrls: ['./tabs1.page.scss'],
})
export class Tabs1Page implements OnInit {

  nombre: any='';
  apellido: any='';

  constructor() { }

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellido');

    console.log(this.nombre);
  }

}
