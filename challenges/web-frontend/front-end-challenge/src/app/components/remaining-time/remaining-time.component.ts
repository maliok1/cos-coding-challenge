import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: 'app-remaining-time',
  templateUrl: './remaining-time.component.html',
  styleUrls: ['./remaining-time.component.scss']
})
export class RemainingTimeComponent implements OnInit {
  @Input() secondsLeft;

  displayedTime;

  constructor() { }

  ngOnInit(): void { 
    this.countDown(this.secondsLeft)
   }

   countDown(seconds){
    let countDown =  interval(1000).pipe(
      map(x => {
        this.secondsLeft = +seconds - x
        this.displayedTime = new Date(this.secondsLeft * 1000).toISOString().substr(11, 8)
        })
      ,
      shareReplay(1)
      ).subscribe();

      if(this.secondsLeft === 0 ){
        countDown.unsubscribe();
      }
  }

  
}