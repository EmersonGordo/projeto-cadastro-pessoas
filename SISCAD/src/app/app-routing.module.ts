import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { Pessoa } from './pessoa';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';




const routes: Routes = [

  { path: '', component: ContentComponent },
  { path: 'home-logada', component: HomeLogadaComponent },
  { path: 'pessoa', component: PessoaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
