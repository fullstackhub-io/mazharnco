<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import { MouseEvent } from '@agm/core';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
=======
import { Component } from '@angular/core';
>>>>>>> d0252e8f7aa01ae4dac7df33390e3cf5b6d63bb0

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD

export class AppComponent implements OnInit {

  public carouselBanner: NgxCarousel;
  title = 'app';

  zoom: number = 8;
  lat: number = 33.593742;
  lng: number = 73.050849;

  markers: marker[] = [
    {
      lat: 33.593742,
      lng: 73.050849,
      label: 'A',
      draggable: false
    }
  ];

  ngOnInit() {
    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      loop: true,
      touch: true
    }
  }

=======
export class AppComponent {
  title = 'app';
>>>>>>> d0252e8f7aa01ae4dac7df33390e3cf5b6d63bb0
}
