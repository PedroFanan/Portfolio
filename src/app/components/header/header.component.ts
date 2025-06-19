import { Component } from '@angular/core';
import { ComponentsModule } from '../../module/components.module';

@Component({
  selector: 'app-header',
  imports: [ComponentsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  hovered: any = null;

  services = [
    {
      title: 'Landing Pages',
      description: 'Alta conversão e performance para impulsionar sua presença online.'
    },
    {
      title: 'SaaS',
      description: 'Desenvolvimento de aplicações SaaS completas e escaláveis.'
    },
    {
      title: 'Sistemas de Gerenciamento',
      description: 'Automatize processos e otimize o controle do seu negócio.'
    }
  ];

}
