import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArProgramaComponent } from './components/logo-ar-programa/logo-ar-programa.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { RedSocialComponent } from './components/red-social/red-social.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArProgramaComponent,
    AcercadeComponent,
    RedSocialComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
