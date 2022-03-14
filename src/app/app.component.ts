import { BlueComponent } from './components/blue/blue.component';
import { GreenComponent } from './components/green/green.component';
import { RedComponent } from './components/red/red.component';
import { BaseComponent } from './components/base';
import { Component, TemplateRef, ViewChild } from '@angular/core';

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  
  red = RedComponent;
  green = GreenComponent;
  blue = BlueComponent;


  @ViewChild(AdDirective, {static: true}) host!: AdDirective;

  

  onClick(component: any) {
    const viewRef = this.host.viewContainerRef;
    viewRef.clear();
    viewRef.createComponent<BaseComponent>(component)
  }
}
