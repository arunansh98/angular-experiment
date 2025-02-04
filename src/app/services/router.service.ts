import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  public router = inject(Router);

  navigateByUrl(url : string){
    // console.log('router service called !');
    
    this.router.navigateByUrl(url);
  }
}
