import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {EuComponent} from "./pages/eu/eu.component";
import {AjudaComponent} from "./pages/ajuda/ajuda.component";
import {TrabalhosComponent} from "./pages/trabalhos/trabalhos.component";
import {ContatoComponent} from "./pages/contato/contato.component";


const routes: Routes = [
  { path: '',           component: HomeComponent },
  { path: 'eu',         component: EuComponent },
  { path: 'ajuda',      component: AjudaComponent },
  { path: 'trabalhos',  component: TrabalhosComponent },
  { path: 'contato',    component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
