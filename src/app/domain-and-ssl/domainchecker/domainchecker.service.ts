import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";







@Injectable({
  providedIn: 'root'
})
export class DomaincheckerService {


  constructor(private http: HttpClient) {

  }


  public addinput (inputdomainname: InputDomainName): Observable<{InputDomainName}> {
    return this.http.post<{InputDomainName}>(this.configUrl, inputdomainname)
  }

  configUrl = 'assets/config.json';
  public getConfig() {
    return this.http.get<Config>(this.configUrl)
  }

}
export interface Config {
  heroesUrl: string;
  textfile: string;
}

export class InputDomainName {
  status : boolean;
  inputname : string;
}




