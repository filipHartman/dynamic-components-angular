import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AdDirective } from './app.component';
import { RedComponent } from './components/red/red.component';
import { GreenComponent } from './components/green/green.component';
import { BlueComponent } from './components/blue/blue.component';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    GreenComponent,
    BlueComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
