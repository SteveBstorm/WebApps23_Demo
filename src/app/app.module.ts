import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { DemoroutingComponent } from './demo/demorouting/demorouting.component';
import { TargetComponent } from './demo/demorouting/target/target.component';
import { FourofourComponent } from './fourofour/fourofour.component';
import { DemoinputComponent } from './demo/demoinput/demoinput.component';
import { EnfantComponent } from './demo/demoinput/enfant/enfant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoserviceComponent } from './demo/demoservice/demoservice.component';

import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DemoComponent,
    DemoroutingComponent,
    TargetComponent,
    FourofourComponent,
    DemoinputComponent,
    EnfantComponent,
    DemoserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
