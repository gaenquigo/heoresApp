import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino : string = '';

  heroes : Heroe[] = [];

  heroeEncontrado! : Heroe;

  sinSugerencias : boolean  = false;
 
  constructor(private heroeService : HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){

    
    this.heroeService.getSugerencias(this.termino)
    .subscribe(heroes =>{
      this.heroes = heroes
    } )

   
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
      return;
    }
    
    
    const heroe: Heroe = event.option.value;
    console.log(heroe)
    this.termino = heroe.superhero;

    this.heroeService.getHeroeById(heroe.id!).subscribe(heroe => this.heroeEncontrado = heroe);
  }

}
