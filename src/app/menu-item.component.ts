import { Component, Input } from '@angular/core';

@Component({
  selector: '[recursive]',
  template: `
  <li *ngFor="let item of children">
    <a [routerLink]="item.href">{{item.label}}</a>
    <ul recursive *ngIf="item.children" 
        [children]="item.children" 
        [parent]="self" 
        [level]="level!=undefined?level+1:0">
    </ul>
</li>
  `,
})
export class MenuItemComponent  {
  @Input() level: number;
  @Input() label: string;
  @Input() children: any[];
  @Input() parent: any;

  self=this;
}
