import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JedenComponent } from './jeden/jeden.component';
import { DrugiComponent } from './drugi/drugi.component';

@NgModule({
  declarations: [
    AppComponent,
    JedenComponent,
    DrugiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
