import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { AuthGuard } from './utils/auth.guard';
import { EditarComponent } from './componentes/editar/editar.component';

const routes: Routes = [

  { path: 'portfolio', component:PortfolioComponent },
  { path: 'login', component:LoginComponent },
  { path: '', redirectTo: 'portfolio', pathMatch:'full' },
  { path: 'editar', component:EditarComponent, canActivate:[AuthGuard]},
  { path: 'registrar-usuario', component:RegistrarUsuarioComponent },
  { path: '**', redirectTo: 'portfolio', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
