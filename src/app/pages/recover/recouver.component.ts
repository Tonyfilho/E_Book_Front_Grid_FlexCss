import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication-email.service';
import { DialogService } from '../../_share/pop-up/dialog-slow.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recover',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './recouver.component.html',
  styleUrl: './recouver.component.scss'
})
export class RecouverComponent {

  private emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  private fb = inject(UntypedFormBuilder);
  private route = inject(Router);
  recoverForm!: UntypedFormGroup;



  constructor(private authServices: AuthenticationService, private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.recoverForm = this.fb.nonNullable.group({
      email: ['', { validators: [Validators.required, Validators.pattern(this.emailRegex)], updateOn: 'blur' }],

    });
  }


  goBack() {
    this.route.navigateByUrl("/autentication");
    this.recoverForm.reset();
  }


  submitForms() {

    if (!this.recoverForm.valid) {
      this.recoverForm.setValidators(Validators.required);
    }

    this.authServices.reSendPassword(
       this.recoverForm.value.email,
    ).subscribe(
      {
        next: () => {
          this.dialogService.openDialogSucess();
        },
        error: (err: HttpErrorResponse) => {
          this.route.navigate(['/body']);
        },
      }
    );

  }



}



