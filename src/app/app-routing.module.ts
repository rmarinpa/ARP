import { NgModule } from '@angular/core';
import { Routes,RouterModule  } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { NoEncontradoComponent } from './paginas/no-encontrado/no-encontrado.component';


const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'menu',component:MenuComponent},
  {path: '**',component:NoEncontradoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
