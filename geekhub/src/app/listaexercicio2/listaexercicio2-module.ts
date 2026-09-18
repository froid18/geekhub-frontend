import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Listaexercicio2RoutingModule } from './listaexercicio2-routing-module';
import { Ex1 } from './ex1/ex1';
import { Ex2 } from './ex2/ex2';
import { Ex3 } from './ex3/ex3';

@NgModule({
  declarations: [Ex1, Ex2, Ex3],
  imports: [CommonModule, Listaexercicio2RoutingModule],
})
export class Listaexercicio2Module {}
