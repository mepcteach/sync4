import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' }, 
    { title: 'Productos', url: '/tabs', icon: 'cube-outline' }, 
    { title: 'Cerrar Sesión', url: '/login', icon: 'exit' },
    // Agrega más páginas según sea necesario
  ];
  constructor() {}
}
