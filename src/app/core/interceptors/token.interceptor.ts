import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const excludedUrls = ['/login','/register'];

  if(excludedUrls.some(url=>req.url.includes(url))){
    return next(req)
  }

  let token = sessionStorage.getItem('token');
  const authRequest = req.clone({
    setHeaders : {
      'Authorization' : 'Bearer ' + token
    }
  })

  return next(authRequest);
};
