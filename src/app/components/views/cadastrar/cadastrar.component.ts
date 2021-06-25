import { LivroService } from "./../../../services/livro.service";
import { Livro } from "../../../models/Livro";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
 
  nome!: string;
  isbn!: string;
  preco!: string;
  data!: string;

  constructor(private service: LivroService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let livro = new Livro();
    livro.nome = this.nome;
    livro.isbn = this.isbn;

    livro.preco = Number.parseInt(this.preco);


    
    this.service.cadastrar(livro).subscribe(ciclo => {
      console.log(livro);
      this.snack.open("Novo livro cadastrado com sucesso!", "", {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }

}