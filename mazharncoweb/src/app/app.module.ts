import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Http Module For GET, POST, PUT and DELETE RESTful APIs
import { HttpModule } from '@angular/http';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';

import { AgmCoreModule } from '@agm/core';
import { NgxCarouselModule } from 'ngx-carousel';

import { HomeComponent } from './client/home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { ContactComponent } from './client/contact/contact.component';
import { DataService } from './service/data/data.service';
import { Util } from "./shared/util";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKHGctDoGx1_YdAbRsPlJYQqlQeC6kR2E'
    }),
    NgxCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSlideToggleModule
  ],
  providers: [DataService,Util],
  bootstrap: [AppComponent]
})
export class AppModule { }
