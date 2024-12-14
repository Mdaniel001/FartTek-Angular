import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CotizaOnlineComponent } from './cotiza-online/cotiza-online.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [


  { path: 'home', 
    component: HomeComponent 
  },

  { path: 'servicios',
     component: ServiciosComponent
  },

  { path: 'portafolio', 
    component: PortafolioComponent
  },

  { path: 'nosotros',
     component: NosotrosComponent 
  },

  { path: 'contactanos', 
    component: ContactanosComponent 
  },

  { path: 'cotiza-online',
     component: CotizaOnlineComponent 
  },

  { path: 'footer',
     component: FooterComponent
       
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

