import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-security-questions',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './security-questions.html',
  styleUrls: ['./security-questions.scss']
})
export class SecurityQuestions {
  answer1 = '';
  answer2 = '';

  onSubmit() {
    console.log('Security answers submitted:', this.answer1, this.answer2);
    // Later: backend will validate these answers
  }
}
