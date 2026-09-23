import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 0 },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 3 },
    { id: 3, nome: 'Monitor', preco: 1200, quantidade: 8 },
    { id: 4, nome: 'Headset', preco: 250, quantidade: 5 },
    { id: 5, nome: 'Mousepad', preco: 50, quantidade: 10 }
  ];

}