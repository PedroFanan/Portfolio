import { Component } from '@angular/core';
import { ComponentsModule } from '../../module/components.module';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  title = 'meu-portifolio';
}
