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
      title: 'Dreamer Studios – Site Institucional',
      shortDescription: 'Site institucional para apresentação da empresa, serviços e posicionamento da marca.',
      fullDescription: 'Criação do site institucional com foco em identidade visual, responsividade e experiência do usuário. Implementação de seções estratégicas, navegação intuitiva e otimização para SEO.',
      link: 'https://dreamerstudios.io/',
      image: 'assets/images/dreamer-studios.png'
    },
    {
    title: 'DreamDesk – Plataforma SaaS',
    shortDescription: 'Landing page institucional para apresentação e captação de leads de uma aplicação SaaS.',
    fullDescription: 'Desenvolvimento da landing page focada em conversão, performance e clareza de comunicação. Implementação de layout responsivo, estrutura semântica, otimização de carregamento e integração com fluxos de contato.',
    link: 'https://dreamdesk.dreamerstudios.io/landing',
    image: 'assets/images/dream-desk.png'
  },
  {
    title: 'Landing Page Petshop',
    shortDescription: 'Página institucional para petshop com foco em conversão.',
    fullDescription: 'Desenvolvi uma landing page moderna para um petshop, utilizando Angular e integração com ferramentas de marketing digital.',
    link: '/',
    image: 'assets/images/pet-shop.png'
  },
  {
    title: 'Sistema de Gestão Escolar',
    shortDescription: 'Plataforma web para gerenciamento de alunos, professores e turmas.',
    fullDescription: 'Sistema completo com autenticação, controle de notas, frequência e geração de relatórios, utilizando Angular e Firebase.',
    link: '/',
    image: 'assets/images/sistema escolar.png'
  },
  {
    title: 'Aplicação SaaS para Agendamentos',
    shortDescription: 'Sistema SaaS para gerenciamento de agendamentos e notificações.',
    fullDescription: 'Aplicação multiusuário com painel administrativo, integrações com WhatsApp e e-mail, interface responsiva e dashboards interativos.',
    link: '/',
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
