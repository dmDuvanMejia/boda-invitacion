import { Component } from '@angular/core';
import { NuestraHistoriaComponent } from "../nuestra-historia/nuestra-historia.component";
import { LugarEventoComponent } from "../lugar-evento/lugar-evento.component";
import { ConfirmacionInvitacionComponent } from "../confirmacion-invitacion/confirmacion-invitacion.component";
import { NuestrasFotosComponent } from "../nuestras-fotos/nuestras-fotos.component";

@Component({
  selector: 'app-inicio',
  imports: [NuestraHistoriaComponent, LugarEventoComponent, ConfirmacionInvitacionComponent, NuestrasFotosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
