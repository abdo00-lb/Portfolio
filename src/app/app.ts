import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppEducation } from "./sections/education/app-education";
import { AppExperience } from "./sections/experience/app-experience";
import { AppAbout } from "./sections/about/app-about";
import { AppSkills } from "./sections/skills/app-skills";
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { Hero } from "./sections/Hero/hero";

@Component({
  selector: 'app-root',
  imports: [AppEducation, AppExperience, AppAbout, AppSkills, TranslocoPipe, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  constructor(private transloco: TranslocoService) {}
  myemail = "abdellahlabied2001@gmail.com";
  get lang() {
    var langcurrent = this.transloco.getActiveLang();
    return langcurrent =='fr' ? 'en' : 'fr';
  }
  getopsite(){
    this.transloco.setActiveLang(this.lang);
  }
  protected readonly title = signal('abdellah-portfolio-modern');
   projects = [
    { title: 'Website – Game of Monster', desc: 'Projeto Angular para mostrar habilidades front-end.', tags: ['Angular', 'TypeScript'] },
    { title: 'Dashboard ERP', desc: 'Painel administrativo com gráficos e filtros.', tags: ['.NET', 'API'] },
    { title: 'Real-time Delivery', desc: 'Rastreamento de pedidos em tempo real.', tags: ['SignalR', 'RabbitMQ'] }
  ];

 
}
