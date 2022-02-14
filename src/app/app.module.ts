import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
// Servicios
import { HeroesService } from './services/heroes.services';

// Rutas
import { APP_ROUTING } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MicroserviciosComponent } from './components/microservicios/microservicios.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import {HttpClientModule} from "@angular/common/http";
import { MicroserviciosServices } from './services/microservicios.services';
import { AppInitService } from './app-init.service';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MicroserviciosComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService,
    MicroserviciosServices,
    AppInitService,{
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
