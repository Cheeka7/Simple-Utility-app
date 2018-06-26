import { Component } from '@angular/core';

import { IntroPage } from '../intro/intro';
import { CountdownPage } from '../countdown/countdown';
import { HomePage } from '../notes/home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IntroPage;
  tab2Root = CountdownPage;
  tab3Root = HomePage;

  constructor() {

  }
}
