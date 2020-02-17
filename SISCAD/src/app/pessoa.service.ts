import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';


  // tslint:disable-next-line:align
  const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};



@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  url = 'https://localhost:4201/api/Pessoa';
  constructor(private http: HttpClient) { }


  getAllPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }

  getPessoaById(Id: string): Observable<Pessoa> {
    const apiurl = `${this.url}/${Id}`;
    return this.http.get<Pessoa>(apiurl);
  }

  createPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.url, pessoa, httpOptions);
  }

  updatePessoa(Id: string, pessoa: Pessoa): Observable<Pessoa> {
    const apiurl = `${this.url}/${Id}`;
    return this.http.put<Pessoa>(apiurl, pessoa, httpOptions);
  }

  deletePessoaById(Id: string): Observable<number> {
    const apiurl = `${this.url}/${Id}`;
    return this.http.delete<number>(apiurl, httpOptions);
  }



}
