import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    sobrenome: '',
    endereco: '',
    renda: '',
    cpf: ''

  }

  constructor(private clienteService: ClienteService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente Adicionado!')
      this.router.navigate(['/clientes/create'])
    })

  }

  cancel(): void {
    this.router.navigate(['/clientes/create'])
  }
}