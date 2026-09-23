import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.scss',
})
export class Ex13 {

  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Criar banco de dados', responsavel: 'Juan', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Criar tela de login', responsavel: 'Ana', prioridade: 'média', concluida: true },
    { id: 3, titulo: 'Testar sistema', responsavel: 'Carlos', prioridade: 'baixa', concluida: false },
    { id: 4, titulo: 'Criar API', responsavel: 'Gabriel', prioridade: 'alta', concluida: false },
    { id: 5, titulo: 'Fazer documentação', responsavel: 'Mariana', prioridade: 'baixa', concluida: true },
    { id: 6, titulo: 'Corrigir erros', responsavel: 'Pedro', prioridade: 'média', concluida: false }
  ];

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  get totalConcluidas() {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }

  get totalPendentes() {
    return this.tarefas.filter(tarefa => !tarefa.concluida).length;
  }

}