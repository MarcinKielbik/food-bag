import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss'],
  animations: [
    trigger('burgerAnimation', [
      state(
        'inactive',
        style({
          transform: 'translateY(0px) rotate(0deg)',
        })
      ),
      state(
        'active',
        style({
          transform: 'translateY(8px) rotate(135deg)',
        })
      ),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out')),
    ]),
  ],
})
export class BurgerButtonComponent implements OnInit {
  isActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
