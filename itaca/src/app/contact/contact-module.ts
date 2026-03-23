import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ContactComponent {
  email = '';

  saveEmail(): void {
    // TODO: implement HTTP request to save contact email
    // Example: this.http.post('/api/contact', { email: this.email })
  }
}
