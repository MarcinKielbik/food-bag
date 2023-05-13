import { Component, Input, OnInit } from '@angular/core';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],  

})
export class NavbarComponent implements OnInit {
  logo = faShoppingBag;

  isCollapsed = true;  
  isActive = false; 
  constructor() { }

  ngOnInit(): void {
  }

}
