import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../models/account.model';
import { Authentication } from '../models/authentication.model';
import { SohaLoginApiService } from '../sohalogin-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  account: Account = new Account;

  constructor(private sohaLoginApiService: SohaLoginApiService, private toaster: ToastrService, private router: Router) { }

  authenticate() {
    const resource = 'token';
    this.sohaLoginApiService.post(resource, this.account, (authentication: Authentication)=>{
        //CA09 - Um token de autenticação seguro deverá ser retornado e armazenado. O token deve ter validade de 15 minutos. Ele não precisa ser autorrenovado
        localStorage.setItem("jwt", authentication.jwToken);
        console.log(authentication);
        this.toaster.success('Usuário logado com sucesso');
        this.router.navigate(['home']);
    });
  }
}
