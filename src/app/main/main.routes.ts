import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    {
        //http://localhost:4200/main
        path: '', component: MainComponent, children: [
            //http://localhost:4200/main
            // { path: '', redirectTo: 'home', pathMatch: 'full' },
            //http://localhost:4200/main/home
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            //http://localhost:4200/main/user
            { path: 'user', loadChildren: './user/user.module#UserModule' }
        ]
    },

]