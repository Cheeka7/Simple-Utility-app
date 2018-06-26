import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CountdownPage } from '../pages/countdown/countdown';
import { NotesPage } from '../pages/notes/notes';
import { IntroPage } from '../pages/intro/intro';
import { TabsPage } from '../pages/tabs/tabs';


import { HomePage } from '../pages/notes/home/home';
import { AddNotePage } from '../pages/notes/add-note/add-note';
import { NoteService } from '../providers/note-service/note-service';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewNotePage } from '../pages/notes/view-note/view-note';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    CountdownPage,
    NotesPage,
    IntroPage,
    TabsPage,
    HomePage,
    AddNotePage,
    ViewNotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CountdownPage,
    NotesPage,
    IntroPage,
    TabsPage,
    HomePage,
    AddNotePage,
    ViewNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService,
    LocalNotifications
  ]
})
export class AppModule {}
