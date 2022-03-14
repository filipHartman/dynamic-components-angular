import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.scss']
})
export class GreenComponent implements BaseComponent {
  data: string = 'I am green';
}
