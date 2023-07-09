import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { FoodCardComponent } from '../food-card/food-card.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})


export class NavbarComponent {
  logo = faShoppingBag;
  // user = faUserAlt;

  isCollapsed = true;
  isActive = false;

	constructor(private offcanvasService: NgbOffcanvas) {}


  public open(content: TemplateRef<any>) {
		this.offcanvasService.open(content,  { position: 'start' });
	}

}
