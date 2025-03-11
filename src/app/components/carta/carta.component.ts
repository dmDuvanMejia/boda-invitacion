import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  cartaAbierta = false;

  constructor(private router: Router) {}

  abrirInvitacion() {
    this.cartaAbierta = true;
  }

  irAInicio() {
    this.router.navigate(['/inicio']);
  }
}
