import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreAuthService {

  http = inject(HttpClient);

  constructor() { }

  login(payload:any): Observable<any> {
    return this.http.post('http://localhost:3000/auth/login',payload)
  }

}
