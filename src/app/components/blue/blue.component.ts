import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.scss']
})
export class BlueComponent implements BaseComponent {
  data: string = 'I am blue';
}
