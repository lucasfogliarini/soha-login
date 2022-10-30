import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class SohaLoginApiService {
    baseUrl: string = environment.sohaLoginApi;
    constructor(private http: HttpClient, 
                private toastr: ToastrService) {}

    post<TIn,TOut>(resource: string, body: TIn, next: (value: TOut) => void, error?: (err: any) => void){
        var uri = `${this.baseUrl}${resource}`;
        var observable = this.http.post<TOut>(uri, body);
        this.request(observable, next, error);
    }

    request<T>(observable: Observable<T>, next: ((value: T) => void), error?: (err: any) => void){      
        this.toastr.info('Processando');
        let defaultError = (errorResponse: HttpErrorResponse) => {
            this.toastr.error(errorResponse.error.detail);
        };
        observable.subscribe({ 
            next: next,
            error: error || defaultError
        });
    }
}