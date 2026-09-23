import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 5, promocao: false },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 3, promocao: true },
    { id: 3, nome: 'Monitor', preco: 1200, quantidade: 8, promocao: false },
    { id: 4, nome: 'Headset', preco: 250, quantidade: 5, promocao: true },
    { id: 5, nome: 'Mousepad', preco: 50, quantidade: 10, promocao: false }
  ];

  alterarPromocao(produto: Produto) {
    produto.promocao = !produto.promocao;
  }

}