import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_ACCORDION_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import { AllCoursesType } from '../models/learning-app/all-courses-type';
import { LearningAppService } from '../services/learning-app.service';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-courses',
  imports: [FormsModule, FormsModule, IgcFormsModule, IGX_ACCORDION_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public learningAppAllCourses: AllCoursesType[] = [];
  public value: number = 4;

  constructor(private learningAppService: LearningAppService) { }

  ngOnInit() {
    this.learningAppService.getAllCoursesList().pipe(takeUntil(this.destroy$)).subscribe(data => this.learningAppAllCourses = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
