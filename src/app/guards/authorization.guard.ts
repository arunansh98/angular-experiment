import { inject } from '@angular/core';
import { CanActivateFn} from '@angular/router';
import { RouterService } from '../services/router.service';



export const authorizationGuard: CanActivateFn = (route, state) => {

  if(localStorage.getItem('accessToken')){
    return true;
  }
  let routerService = inject(RouterService);
  routerService.navigateByUrl('unauthorized');
  return false
};
