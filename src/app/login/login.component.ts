import { Component } from '@angular/core';
import { Account } from '../models/account.model';
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
    this.sohaLoginApiService.post(resource, this.account, (authentication)=>{
       console.log(authentication);
    });
  }
}
