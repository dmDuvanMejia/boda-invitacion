import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-nuestras-fotos',
  templateUrl: './nuestras-fotos.component.html',
  styleUrls: ['./nuestras-fotos.component.scss'],
  imports: [CommonModule]
})
export class NuestrasFotosComponent {
  fotos = [
    { src: '../../../../public/fondo.jpg', thumb: 'assets/foto1.jpg' },
    { src: 'assets/foto2.jpg', thumb: 'assets/foto2.jpg' },
    { src: 'assets/foto3.jpg', thumb: 'assets/foto3.jpg' }
  ];

  constructor(private readonly lightbox: Lightbox) {}

  abrirLightbox(index: number) {
    this.lightbox.open(this.fotos, index);
  }
}
