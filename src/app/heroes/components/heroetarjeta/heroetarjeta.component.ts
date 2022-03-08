import { Component, Input } from '@angular/core';

import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styles: [
    `
     mat-card{
      margin-top : 20px;
     }
  `
  ]
})
export class HeroeTarjetaComponent {

  @Input() heroe! : Heroe;

}
