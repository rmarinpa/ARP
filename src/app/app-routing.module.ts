import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Noticias', component: NoticiasComponent },
  { path: '**', component: NoEncontradoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
 