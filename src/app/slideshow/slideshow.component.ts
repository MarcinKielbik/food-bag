import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgIf } from '@angular/common';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class SlideshowComponent implements OnInit {

  bread = 'assets/images/chleb.jpg';
  fruit = 'assets/images/warzywa-i-owoce.jpg';
  burger = 'assets/images/Coffee.jpg';
  // images = [2, 1000, 2].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [this.bread, this.fruit, this.burger];

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}

  ngOnInit(): void {
  }

}
