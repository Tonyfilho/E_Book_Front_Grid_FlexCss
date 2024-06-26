

import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [
  { path: '', redirectTo: 'section', pathMatch: 'full' },
  {path:"about", loadComponent: ()  => import('./pages/about/about.component').then(m => m.AboutComponent)},
  {path:"not-found", component: NotFoundComponent},
  { path: '**', redirectTo: () => { return '/not-found'} },

];
