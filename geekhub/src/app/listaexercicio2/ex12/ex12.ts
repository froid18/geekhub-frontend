import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.scss',
})
export class Ex12 {

  nome = '';
  quantidade = 0;
  mensagem = '';

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', quantidade: 5 },
    { id: 2, nome: 'Mouse', quantidade: 3 }
  ];

  cadastrar() {

    if (this.nome.trim() === '' || this.quantidade < 0) {
      this.mensagem = 'Não foi possível realizar o cadastro.';
      return;
    }

    const novoProduto: Produto = {
      id: this.produtos.length + 1,
      nome: this.nome,
      quantidade: this.quantidade
    };

    this.produtos.push(novoProduto);

    this.nome = '';
    this.quantidade = 0;
    this.mensagem = '';
  }

  excluir(id: number) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }

}