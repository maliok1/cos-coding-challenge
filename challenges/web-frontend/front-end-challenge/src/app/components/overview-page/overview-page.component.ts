import { Component,  OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
})
export class OverviewPageComponent implements OnInit {
  constructor(
    public authenticationService: AuthenticationService,
  ) {}

  recommendedCars: [];
  getAuctions;


  ngOnInit(): void {      
    let userId = this.authenticationService.getEmail();
 
    this.getAuctions = timer(0,20000).subscribe(()=>{this.authenticationService
      .getAuction(userId)
      .subscribe((data) => {
        this.recommendedCars = data.items;
      }); 
    })          
  }

  ngOnDestroy(): void {
   this.getAuctions.unsubscribe();
  }

}
