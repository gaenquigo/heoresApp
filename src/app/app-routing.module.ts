import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './shared/errorpage/errorpage.component';
import { AuthGuard } from './auth/guards/auth.guard';


const routes : Routes=[
  {
    path : 'auth',
    loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path : 'heroes', 
    loadChildren : () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canLoad : [AuthGuard],
    canActivate :[AuthGuard]
  },
  {
    path : '404',
    component : ErrorpageComponent
  },
  {
    path : '**',
    //component : ErrorpageComponent
    redirectTo : '404'
  }
]



@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
