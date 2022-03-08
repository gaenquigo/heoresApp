import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//importacion del flax para los grid
import { FlexLayoutModule } from '@angular/flex-layout';

//importacion de materias angular disaing 
import { MaterialModule } from '../material/material.module';



import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroeTarjetaComponent } from './components/heroetarjeta/heroetarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarAccionComponent } from './components/confirmar-accion/confirmar-accion.component';






@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
    ConfirmarAccionComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class HeroesModule { }
