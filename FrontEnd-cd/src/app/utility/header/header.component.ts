import { ApiServicesMsg } from '../../api-services/api-services-msg';
import { Component, OnInit, AfterContentChecked } from '@angular/core';

import { AuthenticationService } from '../../services';
import { UsuarioService } from '../../usuario/usuario.service';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  moduleId: 'module.id',
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

mostrarMenu = false;
usuario: any = {};
baixando: boolean;

  constructor(
    private apiServicesMsg: ApiServicesMsg,
    private authenticationService: AuthenticationService,
    private usuarioService: UsuarioService,
    private storageService: StorageService
  ) {

  }
  logout() {
    Swal({
      title: 'Você tem certeza?',
      html: `Você tem certeza que deseja sair?`,
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim, sair agora!',
      cancelButtonText: 'Não, continuar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.authenticationService.logout();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.apiServicesMsg.setMsg('error', 'Ação cancelada.', 3000);
      }
    });
  }

  isLogado() {
    return this.authenticationService.isLogado();
  }

  verificarCode() {
    if (this.authenticationService.verificaUser() === 1) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {}

   ngAfterContentChecked() {
    if ((this.storageService.getLocalUser() !== null) && (this.storageService.getLocalUser().user !== this.usuario.login)) {
          this.usuarioService.getUsuario(this.authenticationService.verificaUser())
           .subscribe(
             result => {
               this.usuario = result[0];
             },
             erro => Swal('Erro', erro.error, 'error')); 
    }
  } 
}
