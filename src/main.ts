import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'home', loadComponent: () => import('./app/home/home.component').then(m => m.HomeComponent) },
      { path: 'servicios', loadComponent: () => import('./app/servicios/servicios.component').then(m => m.ServiciosComponent) },
      { path: 'portafolio', loadComponent: () => import('./app/portafolio/portafolio.component').then(m => m.PortafolioComponent) },
      { path: 'nosotros', loadComponent: () => import('./app/nosotros/nosotros.component').then(m => m.NosotrosComponent) },
      { path: 'contactanos', loadComponent: () => import('./app/contactanos/contactanos.component').then(m => m.ContactanosComponent) },
      { path: 'cotiza-online', loadComponent: () => import('./app/cotiza-online/cotiza-online.component').then(m => m.CotizaOnlineComponent) },
    ])
  ]
}).catch(err => console.error(err));
