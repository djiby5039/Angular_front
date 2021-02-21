import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(){
  var firebaseConfig = {
    apiKey: "AIzaSyAreronuS6yryuLnOgf9AKh4rNyp0Nqx9E",
    authDomain: "flask-angular-f5d32.firebaseapp.com",
    projectId: "flask-angular-f5d32",
    storageBucket: "flask-angular-f5d32.appspot.com",
    messagingSenderId: "510616657006",
    appId: "1:510616657006:web:130fc84d80be673c535a7f",
    measurementId: "G-GFM8MZSX8F"
  }
  firebase.initializeApp(firebaseConfig);
 }
}
