import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: [
  ]
})
export class ProdutoDashboardComponent implements OnInit {

  produtos: Produto[]

  constructor() { }

  ngOnInit(): void {
    this.produtos = [{
      id: 1,
      nome: 'mouse Microsoft',
      valor: 15.90,
      ativo: true,
      imagem: 'mouse.jpg'
    },
    {
      id: 2,
      nome: 'Celular',
      valor: 1500.00,
      ativo: true,
      imagem: 'celular.jpg'
    },
    {
      id: 3,
      nome: 'webcam',
      valor: 250.30,
      ativo: true,
      imagem: 'webcam.jpg'
    },
    {
      id: 4,
      nome: 'headset',
      valor: 1399.89,
      ativo: false,
      imagem: 'headset.jpg'
    },
    {
      id: 5,
      nome: 'Teclado',
      valor: 299.90,
      ativo: true,
      imagem: 'teclado.jpg'
    },
    {
      id: 6,
      nome: 'monitor',
      valor: 199.90,
      ativo: false,
      imagem: 'monitor.jpg'
    },
    {
      id: 7,
      nome: 'Notebook',
      valor: 7000.00,
      ativo: false,
      imagem: 'laptop.jpg'
    },
    {
      id: 8,
      nome: 'Mouse Pad',
      valor: 189.99,
      ativo: false,
      imagem: 'mousepad.jpg'
    }
    ]
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }

}
