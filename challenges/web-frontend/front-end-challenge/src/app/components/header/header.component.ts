import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }
  logMessage: string;
  ngOnInit(): void {
    this.authenticationService.loggedIn ? this.logMessage = 'Log Out' : this.logMessage = 'Log In'
    
  }

}
