import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './utils/auth.guard';
import { EditarComponent } from './componentes/editar/editar.component';

const routes: Routes = [

  { path: 'portfolio', component:PortfolioComponent },
  { path: 'formulario', component:FormularioComponent },
  { path: 'login', component:LoginComponent },
  { path: '', redirectTo: 'portfolio', pathMatch:'full' },
  { path: 'editar', component:EditarComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'portfolio', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
