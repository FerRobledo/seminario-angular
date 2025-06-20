import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children:[
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'productos',
                component: ProductosComponent,
            }
        ]
    },
];
