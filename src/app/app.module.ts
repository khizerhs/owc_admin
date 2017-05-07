import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { UsersPage } from '../pages/users/users';
import { CropsPage } from '../pages/crops/crops';
import { EditCropPage } from '../pages/edit-crop/edit-crop';
import { CreateCropPage } from '../pages/create-crop/create-crop';
import { CropDetailsPage } from '../pages/crop-details/crop-details';
import { EditStagePage } from '../pages/edit-stage/edit-stage';
import { SensorsPage } from '../pages/sensors/sensors';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { CreateUserPage } from '../pages/create-user/create-user';
import { CreateStagePage } from '../pages/create-stage/create-stage';
import { EditUserPage } from '../pages/edit-user/edit-user';

import { SmartfarmUsers } from '../providers/smartfarm-users';
import { SmartfarmCrops } from '../providers/smartfarm-crops';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    CropsPage,
    SensorsPage,
    UserDetailsPage,
    CropDetailsPage,
    CreateUserPage,
    CreateCropPage,
    CreateStagePage,
    EditUserPage,
    EditCropPage,
    EditStagePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    CropsPage,
    SensorsPage,
    UserDetailsPage,
    CropDetailsPage,
    CreateUserPage,
    CreateStagePage,
    CreateCropPage,
    EditUserPage,
    EditCropPage,
    EditStagePage
  ],
  providers: [
    SmartfarmUsers,
    SmartfarmCrops,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
