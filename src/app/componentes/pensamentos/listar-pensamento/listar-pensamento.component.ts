import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: "Passo informações para o componente filho",
      autoria: "Componente pai",
      modelo: 'modelo3'
    },
    {
      conteudo: "Minha propriedade é decorada com @Input",
      autoria: "Componente filho",
      modelo: 'modelo1'
    },
    {
      conteudo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, maxime? Excepturi deserunt in quia autem aliquam, nam magnam, temporibus doloremque qui quisquam natus et obcaecati impedit quod asperiores, sequi quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, maxime? Excepturi deserunt in quia autem aliquam, nam magnam, temporibus doloremque qui quisquam natus et obcaecati impedit quod asperiores, sequi quos.",
      autoria: "Componente filho",
      modelo: 'modelo2'
    },
  ];

}
