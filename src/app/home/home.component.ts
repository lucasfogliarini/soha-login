import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toaster: ToastrService, private router: Router) { }

  ngOnInit(): void {
    const jwt = localStorage.getItem('jwt');
    if(!jwt){
      this.toaster.info('Precisa logar para acessar a aplicação');
      this.router.navigate(['login']);
    }
  }

  logout(){
    localStorage.removeItem('jwt');
    this.toaster.success('Usuário deslogado com sucesso');
    this.router.navigate(['login']);
  }
}
