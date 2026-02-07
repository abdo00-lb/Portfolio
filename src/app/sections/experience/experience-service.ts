// experience-content.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslocoService } from '@jsverse/transloco';
import { switchMap, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface ExperienceDto {
  id: string;
  role: string;
  company: string;
  city: string;
  period: { from: string; to: string };
  projects: Array<{
    title: string;
    summary: string;
    bullets: string[];
    tags: string[];
  }>;
}

@Injectable({ providedIn: 'root' })
export class ExperienceContentService {

  experiences$ : Observable<ExperienceDto[]>;
  constructor(private http: HttpClient, private transloco: TranslocoService) {
    this.experiences$ = this.transloco.langChanges$.pipe(
    switchMap((lang) =>
      this.http.get<ExperienceDto[]>(`/assets/content/experience.${lang}.json`)
    ),
    shareReplay(1)
  );
}
 

}
