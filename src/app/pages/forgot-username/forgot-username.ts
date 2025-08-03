import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-username',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './forgot-username.html',
  styleUrls: ['./forgot-username.scss']
})
export class ForgotUsername {
  email = '';

  onSubmit() {
    console.log('Recovering username for email:', this.email);
    // Later: call backend endpoint to email the username
  }
}
