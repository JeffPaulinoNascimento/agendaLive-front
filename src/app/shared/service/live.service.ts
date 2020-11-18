import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponsePageableModel} from "../model/responsePageable.model";
import {LiveModel} from '../model/live.model';
import {analyticsPackageSafelist} from '@angular/cli/models/analytics';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/lives/';

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  };

  constructor( private httpCliente: HttpClient ) {
    if (environment.production) {
      this.apiUrl = environment.URL_REQUEST;
    }
  }

  public getLivesWithFlag(flag: string): Observable<ResponsePageableModel> {
    console.log(this.apiUrl);
    return this.httpCliente.get<ResponsePageableModel>(this.apiUrl + '?flag=' + flag);
  }

  public postLives(live: any): Observable<LiveModel>{
    return this.httpCliente.post<any>(this.apiUrl, live, this.httpOptions);
  }
}
