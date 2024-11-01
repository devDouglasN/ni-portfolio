// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router'; // Importamos ExtraOptions

import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FormacaoComponent } from './components/formacao/formacao.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CertificateComponent } from './components/certificate/certificate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'formacao', component: FormacaoComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'certificados', component: CertificateComponent},
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

// Configuramos as opções de roteamento para habilitar o scroll para fragmentos
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)], // Passamos as opções aqui
  exports: [RouterModule],
})
export class AppRoutingModule { }
