import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ServiciosComponent } from './servicios/servicios.component';
import { PortafolioComponent } from './portafolio/portafolio.component';


import { CotizaOnlineComponent } from './cotiza-online/cotiza-online.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({

  declarations: [








  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

      { path: 'servicios', component: ServiciosComponent },
      { path: 'portafolio', component: PortafolioComponent },


      { path: 'cotiza-online', component: CotizaOnlineComponent },
      { path: 'footer', component: FooterComponent }


    ])
  ],
  providers: [],
})
export class AppModule {}
