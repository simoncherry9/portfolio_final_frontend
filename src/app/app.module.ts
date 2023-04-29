import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SidebarComponent,
    CuerpoComponent,
    PersonaComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    ProyectosComponent,
    PortfolioComponent,
    AptitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
