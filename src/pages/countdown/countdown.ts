import { Component, OnInit} from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-countdown',
  templateUrl: 'countdown.html'
})
export class CountdownPage implements OnInit {
  public days: any
  public minutes: any;
  public hours: any;
  public seconds: any;
  public difference: any;

  constructor(public navCtrl: NavController,
    public localNotifications: LocalNotifications,
    public platform: Platform,
    public alertCtrl: AlertController) {}


  ngOnInit(): void {
    let timer: any;
    //countdown set to new year 2019
    let compareDate = new Date("2019-01-01");
    setInterval( () => this.timeBetweenDates(compareDate), 1000 );
  }


  timeBetweenDates(toDate) {
       let dateEntered = toDate;
       let now = new Date();
       this.difference = dateEntered.getTime() - now.getTime();

       if (this.difference <= 0) {
          return;

       } else {
         // calculating the time left
         this.seconds = Math.floor(this.difference / 1000);
         this.minutes = Math.floor(this.seconds / 60);
         this.hours = Math.floor(this.minutes / 60);
         this.days = Math.floor(this.hours / 24);
         this.hours %= 24;
         this.minutes %= 60;
         this.seconds %= 60;
       }
  }



}
