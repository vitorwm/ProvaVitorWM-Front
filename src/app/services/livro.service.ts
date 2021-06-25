import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Livro } from "../models/Livro";

@Injectable({
  providedIn: "root",
})
export class LivroService {

  baseURL = "http://localhost:2020/";

  constructor(private http: HttpClient) {}

  listar(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.baseURL}livro/listar/`);
  }

  cadastrar(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(`${this.baseURL}livro/cadastrar/`, livro);
  }
}
