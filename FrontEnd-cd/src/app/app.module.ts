import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './login/auth.service';

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
import { Erro404Component } from './erro404/erro404.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AuthGuard } from './guards/auth.guard.service';
import { AuthenticationService, JwtInterceptorService, JwtInterceptor } from './services';
import { HeaderComponent } from './utility/header/header.component';
import { StorageService } from './services/storage.service';
import { ConfirmModalComponent } from './utility/modal/modal.component';
import { ApiServiceHandleError } from './api-services/api-service-handleError';
import { FooterComponent } from './utility/footer/footer.component';
import { SuiModule } from 'ng2-semantic-ui';
import { SuiCheckbox, SuiCheckboxModule, SuiRatingModule } from 'ng2-semantic-ui/dist';
import { ApiServicesData } from './api-services/api-services-data';
import { HttpModule } from '@angular/http';
import { UsuarioService } from './usuario/usuario.service';
import { ApiServicesMsg } from './api-services/api-services-msg';
import { ApiServicesPagination } from './api-services/api-services-pagination';
import { UsuarioAdicionarEditarComponent } from './usuario/usuario-adicionar-editar/usuario-adicionar-editar.component';
import { FilterUsuarioPipe } from './usuario/filter-usuario.pipe';
import { UsuarioHomeComponent } from './usuario/usuario-home/usuario-home.component';
import { EntidadeHomeComponent } from './entidade/entidade-home/entidade-home.component';
import { EntidadeService } from './entidade/entidade-home/entidade.service';
import { EntidadeAdicionarEditarComponent } from './entidade/entidade-adicionar-editar/entidade-adicionar-editar.component';



@NgModule({
  declarations: [
    AppComponent,
    UtilityComponent,
    LoginComponent,
    HomeComponent,
    UsuarioComponent,
      UsuarioHomeComponent,
      UsuarioAdicionarEditarComponent,
      FilterUsuarioPipe,
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
    TipoItemComponent,
    Erro404Component,
    HeaderComponent,
    FooterComponent,
    EntidadeHomeComponent,
    EntidadeAdicionarEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    SuiModule,
    SuiCheckboxModule,
    SuiRatingModule
    
  ],
  providers: [
    AuthService,
    AuthGuard,
    ApiServiceHandleError,
    ApiServicesPagination,
    ErrorInterceptorProvider,
    AuthenticationService,
    JwtInterceptorService,
    {provide: LOCALE_ID,
     useValue: 'pt-BR'},
     JwtInterceptor,
     StorageService,
     ApiServicesData,
     UsuarioService,
      FilterUsuarioPipe,
     EntidadeService,
     ApiServicesMsg

     
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
