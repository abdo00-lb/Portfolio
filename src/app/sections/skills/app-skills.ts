import { Component } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { CommonModule, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [TranslocoPipe, NgFor, NgStyle,CommonModule],
  templateUrl: './app-skills.html',
  styleUrl: './app-skills.scss',
})
export class AppSkills {
  constructor(private translocoService: TranslocoService) {}
  skillsContainer = [
    {
      Name: "skills.front",
      icon: "fas fa-code",
      skills : [
        {name:"Angular",leveltxt:"skills.Expert",level:90},
        {name:"TypeScript",leveltxt:"skills.Expert",level:90},
        {name:"CSS/SCSS",leveltxt:"skills.Expert",level:90},
        {name:"JavaScript",leveltxt:"skills.Advanced",level:80},
        {name:"React",leveltxt:"skills.Learning",level:45},
      ],
    },
    {
      Name: "skills.back",
      icon: "fas fa-server",
      skills : [
        {name:".Net core",leveltxt:"skills.Expert",level:90},
        {name:"Java",leveltxt:"skills.Advanced",level:70},
        {name:"Python",leveltxt:"skills.Learning",level:40},
      ]
    },
    {
      Name: "skills.db",
      icon: "fas fa-database",
      skills : [
        {name:"SQL Server",leveltxt:"skills.Expert",level:80},
        {name:"MySQL",leveltxt:"skills.Advanced",level:70},
        {name:"SQLite",leveltxt:"skills.Advanced",level:50}
      ]
    },
    {
      Name: "skills.devopsdeploy",
      icon: "fas fa-rocket",
      skills : [
        {name:"GitLab",leveltxt:"skills.Advanced",level:60},
        {name:"IIS",leveltxt:"skills.Learning",level:45},
        {name:"Docker",leveltxt:"skills.Learning",level:30}
      ]
    }
  ];
}
