import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  nome = 'Carlos';
  idade = 25;
  curso = 'Sistemas de Informação';

  produto = 'Teclado';
  preco = 150;
  quantidade = 3;

  imagemProduto = 'https://via.placeholder.com/300';
  descricaoImagem = 'Imagem de um produto';

}