import { Routes } from '@angular/router';
import { TravelListComponent } from './pages/travel-list/travel-list.component';
import { TravelFormComponent } from './pages/travel-form/travel-form.component';

export const routes: Routes = [
  { path: '', component: TravelListComponent },
  { path: 'new', component: TravelFormComponent }
];