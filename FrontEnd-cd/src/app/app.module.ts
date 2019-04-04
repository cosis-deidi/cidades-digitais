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
import { PrevisaoEmpenhoComponent } from './fiscalizacao/previsao-empenho/previsao-empenho.component';
import { EmpenhoComponent } from './fiscalizacao/empenho/empenho.component';
import { FaturaComponent } from './fiscalizacao/fatura/fatura.component';
import { PagamentoComponent } from './fiscalizacao/pagamento/pagamento.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { AssuntoComponent } from './administracao/assunto/assunto.component';
import { CategoriaComponent } from './administracao/categoria/categoria.component';
import { ClasseEmpenhoComponent } from './administracao/classe-empenho/classe-empenho.component';
import { EtapaComponent } from './administracao/etapa/etapa.component';
import { MunicipioComponent } from './administracao/municipio/municipio.component';
import { NaturezaDespesaComponent } from './administracao/natureza-despesa/natureza-despesa.component';
import { ModuloComponent } from './administracao/modulo/modulo.component';
import { PrefeitoComponent } from './administracao/prefeito/prefeito.component';
import { TipologiaComponent } from './administracao/tipologia/tipologia.component';
import { TipoItemComponent } from './administracao/tipo-item/tipo-item.component';

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
    FiscalizacaoComponent,
    PrevisaoEmpenhoComponent,
    EmpenhoComponent,
    FaturaComponent,
    PagamentoComponent,
    AdministracaoComponent,
    AssuntoComponent,
    CategoriaComponent,
    ClasseEmpenhoComponent,
    EtapaComponent,
    MunicipioComponent,
    NaturezaDespesaComponent,
    ModuloComponent,
    PrefeitoComponent,
    TipologiaComponent,
    TipoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
