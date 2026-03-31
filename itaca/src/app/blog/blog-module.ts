import { Component, signal } from '@angular/core';
import blogData from '../../assets/content/blog.json';

interface Post {
  post_id: number;
  title: string;
  content: string;
  url: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.html',
  styleUrls: ['./blog.css'],
  standalone: true,
})
export class BlogComponent {
  posts = signal<Post[]>(blogData.post);
}
