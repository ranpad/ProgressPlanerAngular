import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(email: string | undefined, password: string | undefined): Observable<any> {
    const body = { email: email, password: password };
    return this.http.post<any>('http://localhost:8080/api/login', body);
  }
}
