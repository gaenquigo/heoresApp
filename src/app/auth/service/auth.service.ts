import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuarios.interface';
import { map, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseUrl : string  = environment.baseUrl;
private _usuario! : Usuario | undefined;


get usuario(){
  return {...this._usuario}
}

  constructor(private http : HttpClient) { }



  verificAutenticacion(): Observable<boolean>{

    if(!localStorage.getItem('token')){
      return of(false)
    }

    return this.http.get<Usuario>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map(usuario => {
          console.log('map', usuario);
          this._usuario = usuario;
          return true;
        })
      )

  }


  login(){
    return this.http.get<Usuario>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap( usuario => {
        this._usuario = usuario;
      }),
      tap(usuario => {
        localStorage.setItem('token', usuario.id);
      })
    )
  }
}
