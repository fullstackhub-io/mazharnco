import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import { MouseEvent } from '@agm/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DataService } from "./service/data/data.service";
import { IMenu } from "./model/menu";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  GET_ALL_URL: string = "/api/menu";
  mainMenus: IMenu[];
  menus: IMenu[];

  searchFrm: FormGroup;

  public carouselBanner: NgxCarousel;
  title = 'app';

  constructor(private _fb: FormBuilder,
              private dialog: MatDialog,
              private _dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.searchFrm = this._fb.group({
      TextSearch: ['', [Validators.minLength(3)]]
    });

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

    this._dataService.get(this.GET_ALL_URL)
      .subscribe(menus => { this.menus = menus.data;alert(JSON.stringify(this.menus)); this.mainMenus =this.menus!=null?this.menus.filter(x => x.MenuType == 'Main'):null; }
      );

  }

  getChildMenu(menuCode) {
    return this.menus.filter(x => x.ParentMenuCode == menuCode)
  }
  
}
