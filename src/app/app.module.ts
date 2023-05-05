import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';

// Componentes
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
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { EditarComponent } from './componentes/editar/editar.component';
import { EditarExperienciasComponent } from './componentes/editar-experiencias/editar-experiencias.component';
import { EditarAptitudesComponent } from './componentes/editar-aptitudes/editar-aptitudes.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { EditarPersonaComponent } from './componentes/editar-persona/editar-persona.component';

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
    RegistrarUsuarioComponent,
    SpinnerComponent,
    EditarComponent,
    EditarExperienciasComponent,
    EditarAptitudesComponent,
    EditarEducacionComponent,
    EditarProyectosComponent,
    EditarPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
