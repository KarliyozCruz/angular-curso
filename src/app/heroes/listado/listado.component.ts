import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string []=['Spiderman', 'Batman', 'Thor', 'Wolverine'];
  heroeEliminado: string = "";

  borrar(){
    this.heroeEliminado = this.heroes.pop() || "";

  }

}
