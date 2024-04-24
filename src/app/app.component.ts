import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FooterHomeComponent } from './pages/footer-home/footer-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterHomeComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ubereats-fron-end';
}
