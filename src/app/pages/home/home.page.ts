import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonImg, IonButton, IonIcon, IonText } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonImg, IonButton, IonIcon, IonText],
})
export class HomePage implements OnInit {

  user: string = "";
  deliverAddress: string = "RANDOM STREET";
  country: string = "USA";
  city: string = "NY";
  lang: string = "ES-EN";
  currency: string = "BTC";
  img: string = "https://img.freepik.com/vector-gratis/fondo-moneda-oro-bitcoin-criptomoneda_1017-31505.jpg";
  switchImg: boolean = true;
  switchForm: boolean = false;
  
  constructor() {

    addIcons({ heart, logoApple, settingsSharp, star });
   }

  changeImg() {
    if(this.switchImg){
      this.img = "https://images.theconversation.com/files/506823/original/file-20230127-16-4cgk1e.jpeg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip";
      console.log("IMAGE CHANGED FROM THE ORIGINAL");
      this.switchImg = false;
    } else {
      this.img = "https://img.freepik.com/vector-gratis/fondo-moneda-oro-bitcoin-criptomoneda_1017-31505.jpg";
      console.log("IMAGE CHANGED TO THE ORIGINAL");
      this.switchImg = true;
    }
  }

  statusForm(){
    if(!this.switchForm){
      this.switchForm = true;
      console.log("FORM DISABLED");
    } else {
      this.switchForm = false
      console.log("FORM ENABLED");
    }
  }

  saveForm(){
    if(this.user.length < 1 || this.deliverAddress.length < 1 || this.country.length < 1 || this.city.length < 1 || this.lang.length < 1 
      || this.currency.length< 1) {
      console.log("The form cannot be saved because are fields that still empty");
      alert("The form cannot be saved because are fields that still empty");
    } else {
      console.log("The form was succesfully saved!");
      alert("The form was succesfully saved!");
    }
    
  }
  ngOnInit() {
  }

}
