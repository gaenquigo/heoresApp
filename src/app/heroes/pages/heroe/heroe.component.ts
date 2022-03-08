import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { switchMap } from 'rxjs';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [ 
  `
 
  img {
    width : 100%;
    border-radius : 5%;
  }
  `
  ]
})
export class HeroeComponent implements OnInit {

  id : string = '';

  heroe! : Heroe ;

  constructor(private ruta : ActivatedRoute , private heroeService : HeroesService, private router : Router ) { }

  ngOnInit(): void {

    this.ruta.params.pipe(
      switchMap(({id}) => this.heroeService.getHeroeById(id))
    )
    .subscribe(heroe  => this.heroe = heroe )
      
  }

  volver(){

    this.router.navigate(['/heroes/listado']);
  }

}
