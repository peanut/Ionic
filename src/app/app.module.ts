import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OnePage } from '../pages/one/one';
import { TwoPage } from '../pages/two/two';
import { FabuPage } from '../pages/fabu/fabu';
import { XiaoxiPage } from '../pages/xiaoxi/xiaoxi';
import { MePage } from '../pages/me/me';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    OnePage,
    TwoPage,
    FabuPage,
    XiaoxiPage,
    MePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    OnePage,
    TwoPage,
    FabuPage,
    XiaoxiPage,
    MePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
