import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { MenuComponent } from './componentes/menu/menu.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';
import { ListaUsuarioComponent } from './componentes/lista-usuario/lista-usuario.component';

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
    AptitudesComponent,
    MenuComponent,
    RecuperarPasswordComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
