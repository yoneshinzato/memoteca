import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento.interface';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

@Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false
}

larguraPensamento(): string {
  if(this.pensamento.conteudo.length >= 256) {
    return 'pensamento-g'
  }
  return 'pensamento-p'
}

mudaIconeFavorito(): string {
  if(!this.pensamento.favorito) {
    return 'inativo'
  }
  return 'ativo'
}

}
