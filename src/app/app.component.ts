import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './body/footer/footer.component';
import { HeaderComponent } from './body/header/header.component';
import { MainComponent } from './body/main/main.component';
import { AuthenticationService } from './_services/authentication.service';


type SingIn = {
  email: string;
  password?: string;
  userName?: string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  authService = inject(AuthenticationService);


  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      const localUser: SingIn = { email: user?.email!, password: '', userName: user?.displayName! };
      if (user) {
        this.authService.currentUserSig.set(localUser);
      } else {

        this.authService.currentUserSig.set(null);

      }
    })
  }

}
