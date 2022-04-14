import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core'


@Component({
  encapsulation: ViewEncapsulation.None, //Disable encapsulation carousel and change the css 
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [ NgbCarouselConfig ]
})
export class HomepageComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ['location-insolite-atypik-house', 'location-insolite-atypik-house-2', 'location-insolite-atypik-house-3'].map((n) => `../../assets/images/icons/${n}.png`);

  constructor(config: NgbCarouselConfig) { 
    config.interval = 5000;
    config.wrap = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.pauseOnFocus = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
