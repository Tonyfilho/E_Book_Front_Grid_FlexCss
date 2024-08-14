import { inject, Injectable } from "@angular/core";
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user, User, UserCredential } from "@angular/fire/auth";
import { exhaustMap, from, Observable, take, tap } from "rxjs";
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
    let encodedString: string; // btoa é uma biblioteca de Base64 para Encode, e const decodedString = atob(encodedString);

    return from(localPromise).pipe(take(1), tap((response) => {
      console.log("loginGmail response.user ", response.user);
     // encodedString = btoa(response.providerId ? response.providerId : '' )/**Posso Usar o Ternario para n ter Null ou As String Ou Exclamação no final */
      encodedString = btoa(response.providerId!), this.authenticationService.currentUserSig.set(
        { userName: response.user.displayName!, email: response.user.email!, password: encodedString})
    }));

    // return from(localPromise).pipe(take(1), exhaustMap(async (user) => this.authenticationService.currentUserSig.set({}))); /**Com ExhastMap temos que por Async */
  }

  logOut() {
    signOut(this.auth);
    this.authenticationService.currentUserSig.set(null);

  }

}
