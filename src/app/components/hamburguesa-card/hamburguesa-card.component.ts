import { Component, Input, OnInit } from '@angular/core';
import { Hamburguesa } from '../../../../public/dto/hamburguesa';

@Component({
  selector: 'app-hamburguesa-card',
  templateUrl: './hamburguesa-card.component.html',
  styleUrls: ['./hamburguesa-card.component.css']
})
export class HamburguesaCardComponent implements OnInit {

  constructor() { }
  
  @Input() hamburguesa!: Hamburguesa;
  
  ngOnInit() {
  }

}


