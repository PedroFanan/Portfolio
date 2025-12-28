import { Component } from '@angular/core';
import { ComponentsModule } from '../../module/components.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
   projects = [
  {
    title: 'Landing Page Petshop',
    shortDescription: 'Página institucional para petshop com foco em conversão.',
    fullDescription: 'Desenvolvi uma landing page moderna para um petshop, utilizando Angular e integração com ferramentas de marketing digital.',
    link: 'https://exemplo.com/petshop',
    image: 'assets/images/pet-shop.png'
  },
  {
    title: 'Sistema de Gestão Escolar',
    shortDescription: 'Plataforma web para gerenciamento de alunos, professores e turmas.',
    fullDescription: 'Sistema completo com autenticação, controle de notas, frequência e geração de relatórios, utilizando Angular e Firebase.',
    link: 'https://exemplo.com/escolar',
    image: 'assets/images/sistema-escolar.png'
  },
  {
    title: 'Aplicação SaaS para Agendamentos',
    shortDescription: 'Sistema SaaS para gerenciamento de agendamentos e notificações.',
    fullDescription: 'Aplicação multiusuário com painel administrativo, integrações com WhatsApp e e-mail, interface responsiva e dashboards interativos.',
    link: 'https://exemplo.com/agendamentos',
    image: 'assets/images/saas.png'
  }
];

   selectedProject: any = null;

  openProject(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
}
