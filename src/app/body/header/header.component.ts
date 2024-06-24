import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  localLogin$!: Observable<boolean>;
  localImg$!: Observable<string>;


  constructor () {
    this.localLogin$ = new Observable(d => d.next(false));
    this.localImg$ = new Observable((d: any ) => d == null ? d.next("") : d.next("./../../../assets/images/login/no_avatar.png"))
  }


  logout() {
    this.localLogin$ = new Observable(d => d.next(false));
  }

}
