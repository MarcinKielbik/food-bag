import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  logo = faShoppingBag;


  Email = 'Email';
  Password = 'Hasło';
  signin = 'Zaloguj'
  loginIcon = faSignInAlt;
}
