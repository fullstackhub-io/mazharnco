import { Component, OnInit } from '@angular/core';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
