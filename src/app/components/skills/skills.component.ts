// skills.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  // Descrição padrão das habilidades
  skillDescription: string =
    'Passe o mouse sobre as habilidades para ver as descrições.';

  // Função para atualizar a descrição da habilidade
  setSkillDescription(description: string) {
    this.skillDescription = description;
  }

  // Função para resetar a descrição da habilidade
  resetSkillDescription() {
    this.skillDescription =
      'Passe o mouse sobre as habilidades para ver as descrições.';
  }
}
