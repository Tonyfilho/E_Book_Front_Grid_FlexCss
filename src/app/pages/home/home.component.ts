import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, take, tap } from 'rxjs';
import { AuthenticationService } from '../../_services/authentication-email.service';
import { UnSubscription } from '../../_share/UnSubscription';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends UnSubscription implements OnInit{

  localName: BehaviorSubject<string>=  new BehaviorSubject("");
  autheService = inject(AuthenticationService);

  ngOnInit(): void {
    this.autheService.user$.pipe(take(1), tap(user =>  user?.displayName ? this.localName.next(user.displayName) :  "Hello Pal, looks link you did not register your name: " ));
  }


}
