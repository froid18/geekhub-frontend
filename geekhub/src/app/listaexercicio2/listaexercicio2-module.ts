import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Listaexercicio2RoutingModule } from './listaexercicio2-routing-module';
import { Ex1 } from './ex1/ex1';

@NgModule({
  declarations: [Ex1],
  imports: [CommonModule, Listaexercicio2RoutingModule],
})
export class Listaexercicio2Module {}
