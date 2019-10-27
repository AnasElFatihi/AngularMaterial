import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdzSearchComponent } from './adz-search/adz-search.component';
import { FormsModule } from '@angular/forms';
import { AdzListeComponent } from './adz-liste/adz-liste.component';
import { HttpClientModule } from '@angular/common/http';
import { AdzDetailsComponent } from './adz-details/adz-details.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AdzSearchComponent,
    AdzListeComponent,
    AdzDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    AdzDetailsComponent
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
