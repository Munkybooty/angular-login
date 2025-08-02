import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})

export class Login {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Placeholder login logic
    console.log('Logging in with:', this.email, this.password);

    // Later we'll call the backend API here
    // Right now, just redirect to welcome page for testing
    this.router.navigate(['/welcome']);
  }
}
