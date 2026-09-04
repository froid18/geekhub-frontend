import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  nome = 'Juan';
  idade = 19;
  curso = 'Engenharia de Software';

  produto = 'Teclado';
  preco = 150;
  quantidade = 3;

  imagemProduto = '/produto.svg';
descricaoImagem = 'Imagem de um produto';

}