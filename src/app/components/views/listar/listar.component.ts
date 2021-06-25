import { LivroService } from "./../../../services/livro.service";
import { Livro } from "../../../models/Livro";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
  livros!: MatTableDataSource<Livro>;
  displayedColumns: string[] = ['isbn', 'nome', 'preco', 'criadoEm'];

  constructor(private service: LivroService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((livros) => {
      this.livros = new MatTableDataSource<Livro>(livros);
    });
  }
}
