import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacion-invitacion',
  templateUrl: './confirmacion-invitacion.component.html',
  styleUrls: ['./confirmacion-invitacion.component.scss']
})
export class ConfirmacionInvitacionComponent {
  nombre = '';
  asistencia = '';

  enviarConfirmacion() {
    alert(`Gracias ${this.nombre}, hemos registrado tu respuesta: ${this.asistencia}`);
  }
}
