import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

const ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwukiSJjoVOHDpcxIj1k7QTriNGx3AZeAxu9-IYnLVbog-h9ti5hD3xjQAUsvWoMb9n/exec';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true,
  imports: [FormsModule],
})
export class HomeComponent {
  email = '';
  feedback = signal<{ message: string; success: boolean } | null>(null);

  saveEmail(): void {
    fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ email: this.email }),
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      redirect: 'follow',
    })
      .then((res) => res.json() as Promise<{ success: boolean; error?: string }>)
      .then((data) => {
        if (data.success) {
          this.showFeedback("You're in! We'll be in touch.", true);
          this.email = '';
        } else {
          this.showFeedback(data.error ?? 'Something went wrong.', false);
        }
      })
      .catch(() => this.showFeedback('Request failed. Please try again.', false));
  }

  private showFeedback(message: string, success: boolean): void {
    this.feedback.set({ message, success });
    setTimeout(() => this.feedback.set(null), 5000);
  }
}
