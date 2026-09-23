import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota?: number;
  status: string;
  entregue: boolean;
}

@Component({
  selector: 'app-desafio',
  standalone: false,
  templateUrl: './desafio.html',
  styleUrl: './desafio.scss',
})
export class Desafio {

  mostrarConcluidos = true;

  projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Sistema de Biblioteca',
      equipe: 'Equipe A',
      nota: 8,
      status: 'planejamento',
      entregue: false
    },
    {
      id: 2,
      titulo: 'Sistema de Vendas',
      equipe: 'Equipe B',
      nota: 5,
      status: 'desenvolvimento',
      entregue: false
    },
    {
      id: 3,
      titulo: 'Aplicativo Acadêmico',
      equipe: 'Equipe C',
      nota: 9,
      status: 'testes',
      entregue: true
    },
    {
      id: 4,
      titulo: 'Portal de Cursos',
      equipe: 'Equipe D',
      status: 'concluído',
      entregue: true
    }
  ];

  alterarExibicao() {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }

  alterarStatus(projeto: Projeto) {

    if (projeto.status === 'planejamento') {
      projeto.status = 'desenvolvimento';

    } else if (projeto.status === 'desenvolvimento') {
      projeto.status = 'testes';

    } else if (projeto.status === 'testes') {
      projeto.status = 'concluído';

    } else {
      projeto.status = 'planejamento';
    }
  }

  get totalConcluidos() {
    return this.projetos.filter(
      projeto => projeto.status === 'concluído'
    ).length;
  }

}