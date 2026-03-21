import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true,
  imports: [FormsModule],
})
export class HomeComponent {
  email = '';

  saveEmail(): void {
    // TODO: implement HTTP request to save subscriber email
    // Example: this.http.post('/api/subscribe', { email: this.email })
  }
}
