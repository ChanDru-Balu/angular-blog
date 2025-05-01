import { inject, Injectable } from '@angular/core';
import { CoreAuthService } from '../../core/services/core-auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacadeAuthService {

  coreAuthService = inject(CoreAuthService)

  currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() { }

  login(payload:any) : Observable<any> {
    return new Observable((observer)=>{
      this.coreAuthService.login(payload).subscribe((response:any)=>{
        observer.next(response);
        observer.complete();
      })
    })
  }

  isAuthendicated() : boolean{
    let token = sessionStorage.getItem('token');
    if(token){
      return true
    } else {
      return false
    }

  }

}
