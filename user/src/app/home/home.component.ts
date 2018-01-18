import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, Routes } from "@angular/router";

declare var $: any;
declare var require:any;
require('raty-js');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
