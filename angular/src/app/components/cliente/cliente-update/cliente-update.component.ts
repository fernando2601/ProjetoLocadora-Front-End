import { Cliente } from "./../cliente.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ClienteService } from "./../cliente.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cliente-update",
  templateUrl: "./cliente-update.component.html",
  styleUrls: ["./cliente-update.component.css"],
})
export class ClienteUpdateComponent implements OnInit {
  cliente: Cliente;

  constructor(
    private clienteservice: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.clienteservice.GetId(id).subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  updateCliente(): void {
    this.clienteservice.update(this.cliente).subscribe(() => {
      this.clienteservice.showMessage("Cliente atualizado com sucesso!");
      this.router.navigate(["/clientes"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/clientes"]);
  }
}