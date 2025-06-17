import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [HeaderComponent, FooterComponent, RouterOutlet]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
