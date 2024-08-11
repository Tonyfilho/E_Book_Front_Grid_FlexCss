import { inject, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogSlowComponent } from "./dialog-slow/dialog-slow.component";



@Injectable({
  providedIn: 'root'
})
export class DialogService {
 private  dialog = inject(MatDialog);

   openDialogRegistration = (enterAnimationDuration: string, exitAnimationDuration: string) => {
    this.dialog.open(DialogSlowComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
    
   }



}
