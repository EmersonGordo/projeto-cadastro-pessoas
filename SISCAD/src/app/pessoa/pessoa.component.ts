import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';




@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})

export class PessoaComponent implements OnInit {

  dataSaved = false;
  pessoaForm: any;
  allPessoas: Observable<Pessoa[]>;
  pessoaIdUpdate = null;
  message = null;




  constructor(private formbulider: FormBuilder, private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaForm = this.formbulider.group({
      Nome: ['', [Validators.required]],
      Sexo: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      DtNascimento: ['', [Validators.required]],
      Naturalidade: ['', [Validators.required]],
      Nacionalidade: ['', [Validators.required]],
      CPF: ['', [Validators.required]],
    });
    this.loadAllPessoas();
  }


  loadAllPessoas() {
    this.allPessoas = this.pessoaService.getAllPessoas();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const pessoa = this.pessoaForm.value;
    this.CreatePessoa(pessoa);
    this.pessoaForm.reset();
  }



  CreatePessoa(pessoa: Pessoa) {
    if (this.pessoaIdUpdate == null) {
      this.pessoaService.createPessoa(pessoa).subscribe(
        () => {
          this.dataSaved = true;
          this.message = 'Registro salvo com sucesso';
          this.loadAllPessoas();
          this.pessoaIdUpdate = null;
          this.pessoaForm.reset();
        }
      );
    } else {
      pessoa.Id = this.pessoaIdUpdate;
      this.pessoaService.updatePessoa(this.pessoaIdUpdate, pessoa).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Registro atualizado com sucesso';
        this.loadAllPessoas();
        this.pessoaIdUpdate = null;
        this.pessoaForm.reset();
      });
    }
  }

  loadPessoaToEdit(Id: string) {
    this.pessoaService.getPessoaById(Id).subscribe(pessoa => {
      this.message = null;
      this.dataSaved = false;
      this.pessoaIdUpdate = pessoa.Id;
      this.pessoaForm.controls.Nome.setValue(pessoa.Nome);
      this.pessoaForm.controls.Sexo.setValue(pessoa.Sexo);
      this.pessoaForm.controls.Email.setValue(pessoa.Email);
      this.pessoaForm.controls.DtNascimento.setValue(pessoa.DtNascimento);
      this.pessoaForm.controls.Naturalidade.setValue(pessoa.Naturalidade);
      this.pessoaForm.controls.Nacionalidade.setValue(pessoa.Nacionalidade);
      this.pessoaForm.controls.CPF.setValue(pessoa.CPF);
    });
  }


  deletePessoa(Id: string) {
    if (confirm('Deseja realmente deletar essa pessoa ?')) {
      this.pessoaService.deletePessoaById(Id).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Registro deletado com sucesso';
        this.loadAllPessoas();
        this.pessoaIdUpdate = null;
        this.pessoaForm.reset();
      });
    }
  }


  resetForm() {
    this.pessoaForm.reset();
    this.message = null;
    this.dataSaved = false;
  }







}
