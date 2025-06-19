import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslatePipe } from './pipes/translate.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  imports: [HeaderComponent,
      AboutComponent,
      ProjectsComponent,
      ContactComponent,
      FooterComponent,
      ],
  providers: [TranslatePipe],
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, 
    private translate: TranslatePipe
  ) {}

  ngOnInit() {
    const title = this.translate.transform('MyPortfolio');
    this.titleService.setTitle(title); 
  }
}
