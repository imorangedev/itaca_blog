import { Routes } from '@angular/router';
import { HomeComponent } from './home/home-module';
import { AboutComponent } from './about/about';
import { PortfolioComponent } from './portfolio/portfolio';
import { BlogComponent } from './blog/blog';
import { ContactComponent } from './contact/contact-module';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent }
];
