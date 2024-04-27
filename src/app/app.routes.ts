import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LocalComponent } from './pages/local/local.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductoComponent } from './pages/producto/producto.component';


export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'local', component: LocalComponent},
    {path: 'producto', component: ProductoComponent},
    {path: 'carrito', component: CarritoComponent}
  

];
