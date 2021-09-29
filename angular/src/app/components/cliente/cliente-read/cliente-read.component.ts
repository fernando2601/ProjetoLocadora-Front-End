import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-cliente-read',
templateUrl: './cliente-read.component.html',
styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  cliente: Cliente[]
  displayedColumns = ['id', 'nome','sobrenome','endereco','renda','cpf','action']
 
  constructor(private ClienteService: ClienteService) { }

 ngOnInit(): void {
    this.ClienteService.read().subscribe(cliente => {
      this.cliente = cliente
    })
  }

}