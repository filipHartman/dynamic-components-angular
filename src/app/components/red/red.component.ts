import { BaseComponent } from './../base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements BaseComponent {

  data: string = 'I am red'

}
