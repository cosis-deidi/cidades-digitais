import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from '../app.api';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { StorageService } from './storage.service';
//import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {

  emitirUsuario = new EventEmitter();

  helper: JwtHelper = new JwtHelper();

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) { }


  login(login: string, senha: string) {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache'
         });    
         let options = {
      headers: httpHeaders
         };        
     // login: edussr senha:edu123 reposta tem que ser Login Inativo
      let a = this.http.post<any>(`${API.AUTH_API}autentica`, { login: login, senha: senha },options);
      console.log(a)
      return a;
  }

  successfulLogin(authorizationValue) {
    const token = authorizationValue;
    const localUser = {
      token: token,
      user: this.helper.decodeToken(token).login,
      coduser: this.helper.decodeToken(token).cod_usuario
    };
    this.storageService.setLocalUser(localUser);
    this.emitirUsuario.emit(localUser);
  }

  verificaUser() {
    if (this.storageService.getLocalUser()) {
      const token = this.storageService.getLocalUser().token;
      return this.helper.decodeToken(token).cod_usuario;
    }
    return false;
  }

  logout() {
    this.storageService.setLocalUser(null);
    this.router.navigate(['/login']);
  }

  isLogado() {
    if (this.storageService.getLocalUser()) {
      return true;
    } else {
      return false;
    }
  }

}