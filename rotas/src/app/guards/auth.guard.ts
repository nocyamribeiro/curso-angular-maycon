import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, UrlTree, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      
      return this.verificarAcesso();
      
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private verificarAcesso(){
    if (this.authService.usuarioEstaAutenticado()){
      return true;
    } 

    this.router.navigate(['/login']);

    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('pode carregar?');
    return this.verificarAcesso();
  }
}
