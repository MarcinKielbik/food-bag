import { Component, OnInit } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  smartfridge = 'assets/images/refrigerators.png';
  phone = 'assets/images/phone.png';
  internet = 'assets/images/laptop.png';
  faHamburger = faHamburger;
  
  constructor() { }

  ngOnInit(): void {

  }

}
