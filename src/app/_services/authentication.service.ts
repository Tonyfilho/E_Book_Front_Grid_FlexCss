import { Auth, getAuth, GoogleAuthProvider, UserCredential } from '@angular/fire/auth';



import { Injectable } from '@angular/core';


import { BehaviorSubject } from 'rxjs';


import { FirebaseApp } from '@angular/fire/app';



import { Location } from '@angular/common';
import { IGoogleToken } from '../_models/interface/google-token';
import { SnackBarService } from '../_share/snack-bar/snack-bar.service';
import { UnSubscription } from '../_share/UnSubscription';







type SingIn = {
  email: string;
  password: string
}

//const app: FirebaseApp = initializeApp(environment.firebase)//OBS: So funciona se usaro construtor
// const auth = Inject(Auth); /***Não funciona unsado o Inject, tem q ir para construtor */
const provider = new GoogleAuthProvider();
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends UnSubscription {
  private tokenExpirationTimer: any;
  isLoginAuthorization$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);   /**Esta variavel sever para liberar o Login no Header*/
  userCredential$: BehaviorSubject<UserCredential> = new BehaviorSubject<UserCredential | any>(null); //tem iniciar o construttor para n dar error de subscribe
  tokenResponse$: BehaviorSubject<IGoogleToken | null> = new BehaviorSubject<IGoogleToken | any>(null); //tem iniciar o construttor para n dar error de subscribe
  auth!: Auth;



  constructor(private snackService: SnackBarService, firebaseApp: FirebaseApp, private location: Location,
  ) {
    super();
    this.auth = getAuth(firebaseApp);
   
  }



}
