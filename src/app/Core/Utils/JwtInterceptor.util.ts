import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationUtil} from './authentication.util';

@Injectable()
export class JwtInterceptorUtil implements HttpInterceptor {
  constructor(private authUtil:AuthenticationUtil) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("entre à cette fonction");
  //  let currentUser = this.authUtil.currentUserValue;
    //console.log(currentUser);
    if (this.authUtil.getJwt){
      request = request.clone({
        setHeaders: {
          Authorization: `${this.authUtil.getJwt}`
        }
      });
    }
    return next.handle(request);
  }
}
