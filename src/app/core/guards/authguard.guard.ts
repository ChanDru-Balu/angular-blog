import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { FacadeAuthService } from '../../features/auth/facade-auth.service';

export const authGuard: CanActivateChildFn = (childRoute, state) => {

  const router = inject(Router);
  const facadeAuthService = inject(FacadeAuthService);
  
  if(facadeAuthService.isAuthendicated()){
    return true;
  } else {
    router.navigate(['login'],{replaceUrl: true})
    return false
  }

};
