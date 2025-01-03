import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication-email.service';
import { DialogService } from '../../_share/pop-up/dialog-slow.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  private fb = inject(UntypedFormBuilder);
  private route = inject(Router);
  registerForm!: UntypedFormGroup;



  constructor(private authServices: AuthenticationService, private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.nonNullable.group({
      name: ['', {validators: [Validators.required, Validators.minLength(2), Validators.maxLength(16)], updateOn: 'blur'}],
      email: ['', { validators: [Validators.required, Validators.pattern(this.emailRegex)], updateOn: 'blur' }],
      password: ['', { validators: [Validators.required, Validators.minLength(8), Validators.maxLength(16)], updateOn: 'blur' }]

    });


  }


  goBack() {
    this.route.navigateByUrl("/body");
    this.registerForm.reset();
  }


  submitForms() {

    if (!this.registerForm.valid) {
      this.registerForm.setValidators(Validators.required);
    }

    this.authServices.registerUserByEmail({
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      userName: this.registerForm.value.name
    }).subscribe(
      {
        next: () => {
          this.dialogService.openDialogSucess();
          this.login();

        },
        error: (err: HttpErrorResponse) => {
          this.route.navigate(['/body']);

        },

      }
    );

  }

  login = () => {
    this.authServices.logOut();
    this.route.navigate(['/autentication']);
    this.registerForm.reset;
  }



}


