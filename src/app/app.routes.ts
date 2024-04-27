import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LocalComponent } from './pages/local/local.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'local', component: LocalComponent},
];
