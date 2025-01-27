import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      text: 'Dashboard'
    }
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: {
      text: 'Courses'
    }
  },
  {
    path: 'tasks',
    component: TasksComponent,
    data: {
      text: 'Tasks'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      text: 'Profile'
    }
  },
  {
    path: 'progress',
    component: ProgressComponent,
    data: {
      text: 'Progress'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
