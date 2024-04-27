import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LocalComponent } from './pages/local/local.component';
import { ProductoComponent } from './pages/producto/producto.component';
export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'local', component: LocalComponent},
  {path: 'producto', component: ProductoComponent},
  
];
