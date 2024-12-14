import { Component, ViewEncapsulation } from '@angular/core';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from "./servicios/servicios.component";
import { PortafolioComponent } from './portafolio/portafolio.component';
import { EncabezadoComponent } from "./navbar/encabezado.component";
import { CotizaOnlineComponent } from './cotiza-online/cotiza-online.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HomeComponent, ContactanosComponent, NosotrosComponent, ServiciosComponent, PortafolioComponent, EncabezadoComponent, CotizaOnlineComponent, FooterComponent],
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'FartTek';
}
