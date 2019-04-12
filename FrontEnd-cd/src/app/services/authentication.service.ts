import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers } from "@angular/http"
import { API } from '../app.api';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  })
};

@Injectable()
export class AuthenticationService {

  emitirUsuario = new EventEmitter();

  helper: JwtHelper = new JwtHelper();
  private url = `${API.AUTH_API}autentica`;
  constructor(
    private http: Http,
    private _http: HttpClient,
    private router: Router,
    private storageService: StorageService,

  ) { }

  login(login: string, senha: string): Observable<any> {


    /* let httpHeaders = new Headers();
    httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded') 
     {headers:httpHeaders}
    */
    /* var json = JSON.stringify({login: login, senha: senha});
                var params = 'json=' + json; */
    // login: edussr senha:edu123 reposta tem que ser Login Inativo
    let a = this._http.post(this.url, { login: login, senha: senha });
    console.log(a)
    return a
  }

  successfulLogin(authorizationValue) {
    const token = authorizationValue;
    console.log(token);
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