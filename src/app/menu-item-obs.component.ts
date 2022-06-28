import { Component, Input } from '@angular/core';

import {isObservable,of} from 'rxjs'
@Component({
  selector: '[recursive]',
  template: `
  <li *ngFor="let item of children|async">
    <a [routerLink]="item.href">{{item.label}}</a>
    <ul recursive *ngIf="item.children" 
        [children]="item.children" 
        [parent]="self" 
        [level]="level!=undefined?level+1:0">
    </ul>
</li>
  `,
})
export class MenuItemObsComponent  {
  @Input() level: number;
  @Input() label: string;
  @Input('children') setChildren(value)
  {
    this.children=isObservable(value)?value:of(value)
  } 
  @Input() parent: any;

  children:any
  self=this;
}
