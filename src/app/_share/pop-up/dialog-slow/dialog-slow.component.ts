import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { DialogService } from '../dialog-slow.service';

@Component({
  selector: 'app-dialog-slow',
  standalone: true,
  imports: [MatDialogModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './dialog-slow.component.html',
  styleUrl: './dialog-slow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogSlowComponent implements OnInit {
  dialogRef = inject(MatDialogRef<DialogSlowComponent>);
  dialigService = inject( DialogService);



  ngOnInit(): void {
    this.dialogRef.afterClosed().subscribe((isClosed) => {
      this.dialigService.sigIsclosed.set(isClosed);
       console.log(`variável afterclose `, isClosed);

    });

  }

}
