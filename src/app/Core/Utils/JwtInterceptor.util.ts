import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationUtil} from './authentication.util';

@Injectable()
export class JwtInterceptorUtil implements HttpInterceptor {
  constructor(private authUtil:AuthenticationUtil) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authUtil.loadToken();
    console.log("entre to this block function");
    if (this.authUtil.getJwt){
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization:'Bearer '+`${this.authUtil.getJwt}`
        }
      });
    }
    return next.handle(request);
  }
}
