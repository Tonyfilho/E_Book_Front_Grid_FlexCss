

import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BodyComponent } from './components/body.component';


export const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: "about", loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent) },
  { path: "autentication", loadComponent: () => import('./pages/signin/signin.component').then(c => c.SigninComponent)},
  { path: "register", loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent)},
  { path: "recouver", loadComponent: () => import('./pages/recouver/recouver.component').then(c => c.RecouverComponent)},
  { path: "home", loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)},
  { path: "not-found", component: NotFoundComponent },
  { path: "body", component: BodyComponent },
  { path: '**', redirectTo: () => { return '/not-found' } },

];
