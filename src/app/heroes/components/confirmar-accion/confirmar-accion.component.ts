import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirmar-accion',
  templateUrl: './confirmar-accion.component.html',
  styles: [
  ]
})
export class ConfirmarAccionComponent implements OnInit {

  constructor(private matDialoRef : MatDialogRef<ConfirmarAccionComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
  }


  confirmar(){

    this.matDialoRef.close(true);

  }

  salir(){

    this.matDialoRef.close();

  }

}
