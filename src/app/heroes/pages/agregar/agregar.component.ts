import { Component, OnInit } from '@angular/core';
import { Publisher, Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarAccionComponent } from '../../components/confirmar-accion/confirmar-accion.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [

    `
    img{
      width : 100%;
      border-radius : 5px;
    }
      
    `
  ]
})
export class AgregarComponent implements OnInit {

  
  publishers =[
    {
      id : 'DC Comics',
      desc  : 'DC - Comics'
    },
    {
      id : 'Marvel Comics',
      desc  : 'Marvel - Comics'
    }
  ] ;

  heroe : Heroe = {

    superhero :        '',
    publisher :        Publisher.DCComics,
    alter_ego :        '',
    first_appearance : '',
    characters :       '',
    alt_img : ''
    
  }
  
  constructor(private heroeService :  HeroesService,
              private activatedRouter : ActivatedRoute,
              private router : Router,
              private _snackBar : MatSnackBar,
              public dialog: MatDialog ) { }

  ngOnInit(): void {

    if(this.router.url.includes('editar')){
      this.activatedRouter.params
      .pipe(switchMap(({id}) => this.heroeService.getHeroeById(id)))
      .subscribe
      ( heroe => this.heroe = heroe )        
    }   
  }

  guardar(){

    if(this.heroe.superhero.trim().length  === 0 ){
      return;
    }

    if (this.heroe.id ){
      this.heroeService.actualizarHeroe(this.heroe)
      .subscribe(heroe =>{
        this.heroe = heroe 
        this.snackBarMessge('Registro Actualizado...');
      })
    }else{
  
      this.heroeService.agregarHeroe(this.heroe).subscribe(heroe =>{
        this.router.navigate(['heroes/editar', heroe.id]);
        this.snackBarMessge('registro actulizado...');
      });

    }

  }



  borrar(){


    const dialog = this.dialog.open(ConfirmarAccionComponent, {
      width : '250px',
      data:  this.heroe
    })

    dialog.afterClosed().subscribe(
      (result) =>{
        if(result){
           this.heroeService.borrarHeroe(this.heroe.id!).subscribe(resp => {
               this.router.navigate(['/heroes'])
           });
        }
      }
    )

    
  }


  snackBarMessge(mensaje : string){
    this._snackBar.open(mensaje, 'Ok!', {
      duration : 2500
    } )
  }

 


}
