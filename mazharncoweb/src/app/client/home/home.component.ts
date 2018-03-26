import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from "ngx-carousel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  ngOnInit() {
    this.carouselTileItems =
      [{
        "url": "../../assets/images/mnp_logo.png", "work": "Internal & forensic Audit",
        "name": "Muller & Phipps Pakistan", "web": "http://mulphico.pk"
      },
      {
        "url": "../../assets/images/bisp_logo.jpg", "work": "Service Rules",
        "name": "Benizeer Income Support", "web": "http://www.bisp.gov.pk"
      },
      {
        "url": "../../assets/images/icma_logo.png", "work": "Articles on Economy",
        "name": "ICMA Pakistan. ", "web": "http://www.icmap.com.pk"
      },
      {
        "url": "../../assets/images/nr_logo.gif", "work": "Corporate Compliance",
        "name": "NR Soft (Pvt) Ltd.", "web": "http://www.nrsoft.com"
      },
      {
        "url": "../../assets/images/smda_logo.jpg", "work": "Pre-feasibility studies",
        "name": "SMEDA", "web": "http://www.smeda.org"
      },
      {
        "url": "../../assets/images/askri_logo.jpg", "work": "Rebate & Tax - refund",
        "name": "Askari Cement (Pvt) Ltd.", "web": "http://www.askaricement.com.pk"
      }];

    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
      slide: 6,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 5px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.55);
            padding: 4px;
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
          }
        `
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

}
