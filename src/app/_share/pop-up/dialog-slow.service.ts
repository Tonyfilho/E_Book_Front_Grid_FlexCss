import { DialogRecouverComponent } from './dialog-recouver/dialog-recouver.component';
import { inject, Injectable, signal, } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogSlowComponent } from "./dialog-slow/dialog-slow.component";
import { DialogPopUpComponent } from "./dialog-pop-up/dialog-pop-up.component";



@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialog = inject(MatDialog);
  sigNalId = signal<string | null>(null);

  openDialogRegistration = (enterAnimationDuration: string, exitAnimationDuration: string) => {
    this.dialog.open(DialogSlowComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }
  openDialogSucess = () => {
    this.dialog.open(DialogPopUpComponent, {
    });

  }
  openDialogRecouver = () => {
    this.dialog.open(DialogRecouverComponent, {
      enterAnimationDuration: '3000ms',
      exitAnimationDuration: '2000ms'
    });

  }




}
