import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CotizaOnlineComponent } from './cotiza-online/cotiza-online.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal
  { path: 'servicios', component: ServiciosComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'cotiza-online', component: CotizaOnlineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
