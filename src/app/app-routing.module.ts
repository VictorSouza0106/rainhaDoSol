import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';
import { DevelopmentComponent } from './pages/development/development.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: AboutComponent,
  },
  {
    path: 'contato',
    component: ContactComponent,
  },
  {
    path: `patrocinador`,
    component: SponsorComponent,
  },
  { path: 'dev', component: DevelopmentComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
