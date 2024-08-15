import { DialogRecouverComponent } from './dialog-recouver/dialog-recouver.component';
import { inject, Injectable, signal, } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogSlowComponent } from "./dialog-slow/dialog-slow.component";
import { DialogPopUpComponent } from "./dialog-pop-up/dialog-pop-up.component";
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialog = inject(MatDialog);
  sigIsclosed = signal<boolean | null>(null); //não funcionou com dados achinchronos
  isclosed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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
