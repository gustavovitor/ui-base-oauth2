import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/security/auth.service';
import { ToastService } from '../../../services/util/toast.service';
import { ErrorHandlerService } from '../../../services/util/error-handler.service';
import { AuthUserForm } from '../../../core/model/security/auth-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
              private toast: ToastService,
              private errorHandler: ErrorHandlerService,
              private router: Router) { }

  user = new AuthUserForm();

  ngOnInit() {
    this.initialCheck();
  }

  initialCheck() {
    if(!this.auth.isAccessTokenInvalid) {
      this.router.navigate(['']);
    }
  }

  login() {
    this.auth.login(this.user)
      .then(() => {
        this.toast.success('Logado com sucesso');
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        this.errorHandler.error(err);
      });
  }

}
