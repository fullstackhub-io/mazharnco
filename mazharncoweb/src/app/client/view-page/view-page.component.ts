import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {

  private sub: Subscription;
  divClient: boolean = false;
  divAbout: boolean = false;
  divTeam: boolean = false;
  divsmc: boolean = false;
  divits: boolean = false;
  divtx: boolean = false;
  divcc: boolean = false;
  diviso: boolean = false;
  divprt: boolean = false;
  divojt: boolean = false;
  divadt: boolean = false;
  divam: boolean = false;

  constructor(private route: ActivatedRoute) { }

  private hideAll() {
    this.divClient = false;
    this.divAbout = false;
    this.divTeam = false;
    this.divsmc = false;
    this.divits = false;
    this.divtx = false;
    this.divcc = false;
    this.diviso = false;
    this.divprt = false;
    this.divojt = false;
    this.divadt = false;
    this.divam = false;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        if (params['id'] != null) {
          this.hideAll();
          switch (params['id'].toLowerCase()) {
            case 'divclient':
              this.divClient = true;
              break;
            case 'divabout':
              this.divAbout = true;
              break;
            case 'divteam':
              this.divTeam = true;
              break;
            case 'divsmc':
              this.divsmc = true;
              break;
            case 'divits':
              this.divits = true;
              break;
            case 'divtx':
              this.divtx = true;
              break;
            case 'divcc':
              this.divcc = true;
              break;
            case 'diviso':
              this.diviso = true;
              break;
            case 'divprt':
              this.divprt = true;
              break;
            case 'divojt':
              this.divojt = true;
              break;
            case 'divadt':
              this.divadt = true;
              break;
            case 'divam':
              this.divam = true;
              break;
          }
        }
      });
  }

}