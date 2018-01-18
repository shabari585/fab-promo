import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var require:any;
require('raty-js');
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.raty').raty({
      starOn:'../assets/star-on.png', 
    starOff:'../assets/star-off.png',
    starHalf:'../assets/star-half.png',
    half: true ,
    readOnly:true,
    number:5,
    // score:this.f_avg_rat , 
    });
  }

}
