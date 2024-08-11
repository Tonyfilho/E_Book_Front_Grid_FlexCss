import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

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


  ngOnInit(): void {
     const dialogSig = signal<string | null>(null);
    this.dialogRef.afterClosed().subscribe(() => {
      dialogSig.set(this.dialogRef.id);
      console.log(`fechou: ${this.dialogRef.id}`);
    });

  }

}
