import { Component, signal } from '@angular/core';
import projectsData from '../../assets/content/projects.json';

interface Project {
  project_id: number;
  title: string;
  content: string;
  url: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css'],
  standalone: true,
})
export class PortfolioComponent {
  projects = signal<Project[]>(projectsData.projects);
}
