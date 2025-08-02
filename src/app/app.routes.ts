import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { ForgotUsername } from './pages/forgot-username/forgot-username';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { Register } from './pages/register/register';
import { SecurityQuestions } from './pages/security-questions/security-questions';
import { Welcome } from './pages/welcome/welcome';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'forgot-username', component: ForgotUsername },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'register', component: Register },
  { path: 'security-questions', component: SecurityQuestions },
  { path: 'welcome', component: Welcome }
];
