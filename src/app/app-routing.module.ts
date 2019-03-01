import { NgModule } from '@angular/core';
import { Routes,RouterModule  } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { NoEncontradoComponent } from './paginas/no-encontrado/no-encontrado.component';
import { MenuaguapotableComponent } from './paginas/AguaPotable/menuaguapotable/menuaguapotable.component';
import { OperacionaguapotableComponent } from './paginas/AguaPotable/operacionaguapotable/operacionaguapotable.component';
import { ParametrosaguapotableComponent } from './paginas/AguaPotable/parametrosaguapotable/parametrosaguapotable.component';


const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'AguaPotable/menu', component:MenuaguapotableComponent},
  {path: 'AguaPotable/operacion', component:OperacionaguapotableComponent},
  {path: 'AguaPotable/parametros', component:ParametrosaguapotableComponent},
  
  {path: '**',component:NoEncontradoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
