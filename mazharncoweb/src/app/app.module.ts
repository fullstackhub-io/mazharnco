import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
<<<<<<< HEAD
import { NgxCarouselModule } from 'ngx-carousel';

import { AppComponent } from './app.component';
import 'hammerjs';

import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './client/home/home.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKHGctDoGx1_YdAbRsPlJYQqlQeC6kR2E'
    }),
    NgxCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
=======

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
>>>>>>> d0252e8f7aa01ae4dac7df33390e3cf5b6d63bb0
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
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
