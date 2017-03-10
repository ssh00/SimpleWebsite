import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const router: Routes = [
  { path: '', redirectTo:'about', pathMatch:'full'},
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
