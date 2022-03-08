import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs';
import { Usuario } from '../../interfaces/usuarios.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,
              private authService : AuthService) { }

  ngOnInit(): void {
  }
  


  login (){

    this.authService.login().subscribe(resp => {
      
      if(resp.id){
        this.router.navigate(['./heroes']);
      }     

    })

    

  }
}
