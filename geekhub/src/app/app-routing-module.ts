import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categoria',
    loadChildren: () =>
      import('./categoria/categoria-module')
        .then(m => m.CategoriaModule)
  },
  {
    path: 'produto',
    loadChildren: () =>
      import('./produto/produto-module')
        .then(m => m.ProdutoModule)
  },
  {
    path: 'listaexercicio',
    loadChildren: () =>
      import('./listaexercicio/listaexercicio-module')
        .then(m => m.ListaexercicioModule)
  },
  {
    path: 'listaexercicio2',
    loadChildren: () =>
      import('./listaexercicio2/listaexercicio2-module')
        .then(m => m.Listaexercicio2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}