
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { DialogService } from '../../_share/pop-up/dialog-slow.service';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  private emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  private fb = inject(UntypedFormBuilder);
  private route = inject(Router);
  autenticationForm!: UntypedFormGroup;



  constructor(private authServices: AuthenticationService, private popUpService: DialogService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.autenticationForm = this.fb.group({
      email: ['', { validators: [Validators.required, Validators.pattern(this.emailRegex)], updateOn: 'blur' }],
      password: ['', { validators: [Validators.required, Validators.minLength(8), Validators.maxLength(16)], updateOn: 'blur' }]

    });
;

  }


  goBack() {
    this.route.navigateByUrl("/body");
    this.autenticationForm.reset();

  }


  submitForms() {

    if (!this.autenticationForm.valid) {
      this.autenticationForm.setValidators(Validators.required);
    }

    this.authServices.logInWithEmailAndPassword({
      email: this.autenticationForm.value.email,
      password: this.autenticationForm.value.password
    }).subscribe(
      {
        next: () => {
          this.login();
          this.authServices.isLoginAuthorization$.next(true);
        },
        error: (err: HttpErrorResponse) => {
          this.route.navigate(['/body']);

        },

      }
    );

  }

  login = () => {
    this.route.navigate(['/home']);

    this.autenticationForm.reset;
  }

  openDialog = () => {
    this.popUpService.openDialogRegistration('3000ms', '1500ms');
    this.dialog.afterAllClosed.subscribe(() => {
      this.route.navigateByUrl("/register");


    });

  }


}


