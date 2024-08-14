import { inject, Injectable } from "@angular/core";
import { Auth, GoogleAuthProvider, signInWithPopup, user, User, UserCredential } from "@angular/fire/auth";
import { from, Observable } from "rxjs";
import { AuthenticationService } from "./authentication-email.service";


type SingIn = {
  email: string;
  password?: string;

}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGmailService extends UserActivation {

  private auth: Auth = inject(Auth);
  user$: Observable<User | null> = user(this.auth); /**Ja carrega todo User, no caso de AngularFire apos a autenticação */
  authenticationService = inject(AuthenticationService);

  loginByGmail = (): Observable<UserCredential> => {
    const provider = new GoogleAuthProvider();
    const localPromise = signInWithPopup(this.auth, provider);
    return from(localPromise);

  }


}
