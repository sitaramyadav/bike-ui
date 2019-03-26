import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BikeService } from './services/bike.service';
import { AdminComponent} from './componeents/admin/admin.component';
import { HomeComponent } from './componeents/home/home.component';
import { ViewRegistrationComponent } from './componeents/view-registration/view-registration.component';
import { CallbackComponent } from './componeents/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
