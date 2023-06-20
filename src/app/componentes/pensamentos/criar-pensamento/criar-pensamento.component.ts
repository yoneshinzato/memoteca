import { Pensamento } from './../pensamento.interface';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private fb: FormBuilder

    ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      conteudo: ['', [Validators.required]],
      autoria: ['', [Validators.required]],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    console.log(this.formulario)
    if(this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() =>
      this.router.navigate(['/listarPensamento'])
      );
    }

  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }
}
