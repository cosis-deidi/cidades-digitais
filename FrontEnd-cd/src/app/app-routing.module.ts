import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Erro404Component } from './erro404/erro404.component';
import { CidadeDigitalComponent } from './cidade-digital/cidade-digital.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ciddig', component: CidadeDigitalComponent,
    //loadChildren: 'app/cidade-digital/cidade-digital.module#CidadeDigitalModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario', component: UsuarioComponent,
    //loadChildren: 'app/cidade-digital/cidade-digital.module#CidadeDigitalModule',
    canActivate: [AuthGuard]
  },
  { path: 'erro404', component: Erro404Component },
  { path: '**', redirectTo: '/erro404'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
