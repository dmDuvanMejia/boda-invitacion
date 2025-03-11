import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-nuestras-fotos',
  standalone: true,
  templateUrl: './nuestras-fotos.component.html',
  styleUrls: ['./nuestras-fotos.component.scss'],
  imports: [CommonModule, LightboxModule],
  providers: [Lightbox] // Se agrega el proveedor del servicio
})
export class NuestrasFotosComponent {
  fotos = [
    { src: '/fondo.jpg', thumb: '/fondo.jpg' },
    { src: '/fondo.jpg', thumb: '/fondo.jpg' },
    { src: '/fondo.jpg', thumb: '/fondo.jpg' },
  ];

  constructor(private readonly lightbox: Lightbox) {}

  abrirLightbox(index: number) {
    this.lightbox.open(this.fotos, index);
  }
}
