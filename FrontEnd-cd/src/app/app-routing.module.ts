import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Erro404Component } from './erro404/erro404.component';
import { CidadeDigitalComponent } from './cidade-digital/cidade-digital.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioAdicionarEditarComponent } from './usuario/usuario-adicionar-editar/usuario-adicionar-editar.component';
import { UsuarioHomeComponent } from './usuario/usuario-home/usuario-home.component';
import { EntidadeComponent } from './entidade/entidade.component';
import { componentFactoryName } from '@angular/compiler';
import { EntidadeHomeComponent } from './entidade/entidade-home/entidade-home.component';
import { EntidadeAdicionarEditarComponent } from './entidade/entidade-adicionar-editar/entidade-adicionar-editar.component';


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
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UsuarioHomeComponent
      },
      {
        path: 'novo',
        component: UsuarioAdicionarEditarComponent
      },
      {
        path: ':id',
        component: UsuarioAdicionarEditarComponent
      }
    ]
  },
  {
    path: 'entidade', component: EntidadeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: EntidadeHomeComponent,
      },
      {
        path: 'novo',
        component: EntidadeAdicionarEditarComponent
      }
    ],
  },
  { path: 'erro404', component: Erro404Component },
  { path: '**', redirectTo: '/erro404' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
