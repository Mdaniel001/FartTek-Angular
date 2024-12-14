import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CotizaOnlineComponent } from './cotiza-online/cotiza-online.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({

  declarations: [

    HomeComponent,
    ServiciosComponent,
    PortafolioComponent,
    NosotrosComponent,
    ContactanosComponent,
    CotizaOnlineComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'portafolio', component: PortafolioComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'contactanos', component: ContactanosComponent },
      { path: 'cotiza-online', component: CotizaOnlineComponent },
      { path: 'footer', component: FooterComponent }


    ])
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
