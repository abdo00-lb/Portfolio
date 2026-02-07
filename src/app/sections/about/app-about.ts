import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-about',
  imports: [TranslocoPipe],
  templateUrl: './app-about.html',
  styleUrl: './app-about.scss',
})
export class AppAbout {
  language = [
    {name:"English",leveltxt:"skills.Advanced",level:4},
    {name:"Français",leveltxt:"Intermediate",level:3},
    {name:"Arabic",leveltxt:"skills.Advanced",level:5}
  ];
}
