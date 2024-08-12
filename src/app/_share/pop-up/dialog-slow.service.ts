import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogSlowComponent } from "./dialog-slow/dialog-slow.component";



@Injectable({
  providedIn: 'root'
})
export class DialogService {
 private  dialog = inject(MatDialog);
  sigNalId = signal<string| null> (null);

   openDialogRegistration = (enterAnimationDuration: string, exitAnimationDuration: string) => {
    this.dialog.open(DialogSlowComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });

   }


  //  getIdRegistration  = (id: string) => {
  //   this.sigNalId.set(id);
  //  }



}
