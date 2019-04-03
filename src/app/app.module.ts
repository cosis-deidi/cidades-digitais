import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityComponent } from './utility/utility.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EntidadeComponent } from './entidade/entidade.component';
import { CidadeDigitalComponent } from './cidade-digital/cidade-digital.component';
import { LoteComponent } from './lote/lote.component';
import { FiscalizacaoComponent } from './fiscalizacao/fiscalizacao.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilityComponent,
    LoginComponent,
    HomeComponent,
    UsuarioComponent,
    EntidadeComponent,
    CidadeDigitalComponent,
    LoteComponent,
    FiscalizacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
