import { Component } from '@angular/core';
import { ExperienceContentService, ExperienceDto } from './experience-service';
import { Observable } from 'rxjs';
import { TranslocoPipe } from '@jsverse/transloco';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-app-experience',
  imports: [NgFor, AsyncPipe, TranslocoPipe],
  templateUrl: './app-experience.html',
  styleUrl: './app-experience.scss',
})
export class AppExperience {
  experiences$ : Observable<ExperienceDto[]>;
  constructor(private content: ExperienceContentService) {
    this.experiences$ = this.content.experiences$
  } 
}
