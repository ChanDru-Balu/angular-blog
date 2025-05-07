import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const expiredInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);

  return next(req).pipe(
    catchError(error=>{
      if(error instanceof HttpErrorResponse){
        console.log({error})
        if(error.error.error.name == "TokenExpiredError"){
          console.error("invalid token!");
          router.navigate(['/login'],{replaceUrl: true})
        }
        if(error.status == 403){
          console.error('invalid token');
          router.navigate(['login'],{replaceUrl: true})
        }

      }
      return throwError(()=>error)

    })
  )

};
