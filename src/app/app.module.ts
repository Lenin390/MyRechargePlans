import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MobileplansComponent } from './components/mobileplans/mobileplans.component';
import { DthplansComponent } from './components/dthplans/dthplans.component';
import { BroadbandplansComponent } from './components/broadbandplans/broadbandplans.component';
import { SharedModule } from 'src/shared/shared/shared.module';
import { MaterialModule } from 'src/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileplansComponent,
    DthplansComponent,
    BroadbandplansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
