import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  loginUser(user: string) {
    return this._http.get(`https://api.github.com/users/${user}`);
  }
}
