import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/service/auth.service';
import { Usuario } from '../../../auth/interfaces/usuarios.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {


  get usuario(){
   return this.authService.usuario;
  }

  constructor(private router : Router, 
              private authService : AuthService) { }

  ngOnInit(): void {
  }

  logout(){

    this.router.navigate(['./auth'])
  }

}
