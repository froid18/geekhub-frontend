import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  concluida: boolean;
}

@Component({
  selector: 'app-ex14',
  standalone: false,
  templateUrl: './ex14.html',
  styleUrl: './ex14.scss',
})
export class Ex14 {

  usuarioLogado = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', quantidade: 5 },
    { id: 2, nome: 'Mouse', quantidade: 3 }
  ];

  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Criar banco de dados', responsavel: 'Juan', concluida: false },
    { id: 2, titulo: 'Criar tela de login', responsavel: 'Ana', concluida: true }
  ];

  alternarUsuario() {
    this.usuarioLogado = !this.usuarioLogado;
  }

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

}