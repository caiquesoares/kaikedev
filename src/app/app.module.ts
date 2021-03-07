import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TrabalhosComponent } from './pages/trabalhos/trabalhos.component';
import { EuComponent } from './pages/eu/eu.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { MenuComponent } from './includes/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TrabalhosComponent,
    EuComponent,
    AjudaComponent,
    ContatoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
