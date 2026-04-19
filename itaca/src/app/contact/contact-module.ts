import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

const ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwukiSJjoVOHDpcxIj1k7QTriNGx3AZeAxu9-IYnLVbog-h9ti5hD3xjQAUsvWoMb9n/exec';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ContactComponent {
  email = '';
  toast: { message: string; success: boolean } | null = null;

  saveEmail(): void {
    fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ "email": this.email }),
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      redirect: 'follow',
    })
      .then((res) => res.json() as Promise<{ success: boolean; error?: string }>)
      .then((data) => {
        if (data.success) {
          this.showToast('Message sent! We\'ll be in touch.', true);
          this.email = '';
        } else {
          this.showToast(data.error ?? 'Something went wrong.', false);
        }
      })
      .catch(() => this.showToast('Request failed. Please try again.', false));
  }

  private showToast(message: string, success: boolean): void {
    this.toast = { message, success };
    setTimeout(() => (this.toast = null), 4000);
  }
}
