import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArProgramaComponent } from './components/logo-ar-programa/logo-ar-programa.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { RedSocialComponent } from './components/red-social/red-social.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardsoftComponent } from './components/hardsoft/hardsoft.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArProgramaComponent,
    AcercadeComponent,
    RedSocialComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardsoftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
