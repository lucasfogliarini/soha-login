import { Component } from '@angular/core';
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

  constructor(private sohaLoginApiService: SohaLoginApiService) { }

  authenticate() {
    const resource = 'token';
    this.sohaLoginApiService.post(resource, this.account, (authentication: Authentication)=>{
        //CA09 - Um token de autenticação seguro deverá ser retornado e armazenado. O token deve ter validade de 15 minutos. Ele não precisa ser autorrenovado
        localStorage.setItem("jwt", authentication.jwToken);
        console.log(authentication);
    });
  }
}
