import { Injectable } from '@angular/core';
import { Project } from '../models/project.models';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  getProjects(): Project[] {
    return [
      {
        title: 'Landing Page - FintechX',
        description: 'Landing page moderna para uma startup de fintech. Design responsivo com formulário de contato integrado.',
        techStack: ['HTML', 'TailwindCSS', 'TypeScript'],
        githubUrl: 'https://github.com/seudominio/landing-fintech',
        liveDemoUrl: 'https://seudominio.netlify.app/fintech',
        image: 'assets/images/fintech.png',
      },
      {
        title: 'Sistema SAAS - Gestão de Clientes',
        description: 'Aplicação de gerenciamento de clientes com autenticação e painel administrativo.',
        techStack: ['Angular', 'Firebase', 'Tailwind'],
        githubUrl: 'https://github.com/seudominio/saas-client-manager',
        liveDemoUrl: 'https://saas-demo.web.app/',
        image: 'assets/images/saas.png',
      },
      {
        title: 'E-commerce Simples',
        description: 'Frontend de um e-commerce com carrinho e interface moderna.',
        techStack: ['Angular', 'SCSS'],
        githubUrl: 'https://github.com/seudominio/ecommerce-angular',
        liveDemoUrl: 'https://ecommerce-demo.vercel.app/',
        image: 'assets/images/ecommerce.png',
      },
      {
        title: 'Dashboard Analytics',
        description: 'Painel visual com gráficos interativos para análise de dados.',
        techStack: ['Angular', 'Chart.js'],
        githubUrl: 'https://github.com/seudominio/dashboard-analytics',
        liveDemoUrl: 'https://dashboard-demo.vercel.app/',
        image: 'assets/images/dashboard.png',
      }
    ];
  }
}