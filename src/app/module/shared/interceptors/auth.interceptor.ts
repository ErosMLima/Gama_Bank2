// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// import { AuthService } from '../services/auth/auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(
//     private authSerivce: AuthService,
//   ) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     request = request.clone({
//       setHeaders: {
//         Authorization: this.authSerivce.getToken(),
//       }
//     });

//     return next.handle(request);
//   }
// }
