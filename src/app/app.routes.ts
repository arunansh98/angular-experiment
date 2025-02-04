import { Routes } from '@angular/router';
import { authorizationGuard } from './guards/authorization.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

export const routes: Routes = [
    {
        path : '',
        canActivate : [authorizationGuard],
        children : [
            {
                path : '',
                loadChildren : () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path : 'add',
                loadChildren : () => import('./modules/add/add.module').then(m => m.AddModule)
            }
        ]
    }, 
    {
        path : 'unauthorized',
        component : UnauthorizedComponent
    }
];
