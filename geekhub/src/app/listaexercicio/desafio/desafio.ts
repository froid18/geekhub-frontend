import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio',
  standalone: false,
  templateUrl: './desafio.html',
  styleUrl: './desafio.scss',
})
export class Desafio {

  nomeAluno = '';
  quantidadeDisciplinas = 1;
  mensagem = '';

  aumentar() {
    this.quantidadeDisciplinas++;
  }

  diminuir() {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  confirmarMatricula() {
    this.mensagem =
      'Matrícula confirmada para ' +
      this.nomeAluno +
      ' em ' +
      this.quantidadeDisciplinas +
      ' disciplina(s).';
  }

}