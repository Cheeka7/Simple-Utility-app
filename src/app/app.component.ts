import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  public days: any
  public minutes: any;
  public hours: any;
  public seconds: any;
  public difference: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  public localNotifications: LocalNotifications,
    public alertCtrl: AlertController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(): void {
    setInterval( () => this.timeBetweenDates(), 1000 );
  }

  timeBetweenDates() {
    let dateEntered = new Date("2019-01-01");
    let now = new Date();
    this.difference = dateEntered.getTime() - now.getTime();
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);
    let targetSeconds = now.getSeconds();
    let targetMinutes = now.getMinutes();
    let targetHour = now.getHours();
    // push notification to the user in the following days
    if(this.days === 150 || this.days === 100 || this.days == 75 || this.days === 50 || this.days === 25 || this.days === 10) {
      if(targetHour == 10 && targetMinutes == 33 && targetSeconds == 0) {
        this.notification(this.days);
      }
    }

  }

  notification(days) {
    // push notifications setup
    this.localNotifications.requestPermission().then((permission) => {
      this.localNotifications.schedule({
         id: 1,
         text: 'Countdown!!!',
         led: 'FF0000',
      });
      let alert = this.alertCtrl.create({
        title: 'Countdown!!',
        subTitle: days + ' days to go!',
        buttons: ['Yayyy']
      });
      alert.present();
    });
  }
}
