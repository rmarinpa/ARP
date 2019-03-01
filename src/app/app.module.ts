import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { NoEncontradoComponent } from './paginas/no-encontrado/no-encontrado.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuaguapotableComponent } from './paginas/AguaPotable/menuaguapotable/menuaguapotable.component';
import { NavbaraguapotableComponent } from './components/navbars/navbaraguapotable/navbaraguapotable.component';
import { OperacionaguapotableComponent } from './paginas/AguaPotable/operacionaguapotable/operacionaguapotable.component';
import { AsistenciaComponent } from './components/ayudas/asistencia/asistencia.component';
import { ParametrosaguapotableComponent } from './paginas/AguaPotable/parametrosaguapotable/parametrosaguapotable.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NoEncontradoComponent,
    MenuaguapotableComponent,
    NavbaraguapotableComponent,
    OperacionaguapotableComponent,
    AsistenciaComponent,
    ParametrosaguapotableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
