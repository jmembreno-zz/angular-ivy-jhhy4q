import { Component, VERSION, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  menu = [
    { href: '', label: 'Home' },
    {
      href: '',
      label: 'Servicios',
      children: [
        { href: '', label: 'Submenu1' },
        { href: '', label: 'Submenu2' },
        { href: '', label: 'Submenu3' },
        {
          href: '',
          label: 'Submenu4',
          children: [
            { href: '', label: 'Submenu1' },
            { href: '', label: 'Submenu2' },
            { href: '', label: 'Submenu3' },
            {
              href: '',
              label: 'prueba4',
              children: [
                { href: '', label: 'p1' },
                { href: '', label: 'p2' },
                { href: '', label: 'p3' },
                { href: '', label: 'p4' },
              ],
            },
          ],
        },
      ],
    },
    {
      href: '',
      label: 'About',
      children: [
        { href: '', label: 'Submenu1' },
        { href: '', label: 'Submenu2' },
        { href: '', label: 'Submenu3' },
        { href: '', label: 'Submenu4' },
      ],
    },
    { href: '', label: 'Contact' },
  ];
  menuData: any;
  constructor(public menuService: MenuService) {}
  ngOnInit() {
    this.menuService.getObjectMenu().subscribe((res) => {
      this.menuData = res;
    });
  }
}
