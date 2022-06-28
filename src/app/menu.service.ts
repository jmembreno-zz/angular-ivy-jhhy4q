import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, forkJoin } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private httpClient: HttpClient) {}
  /*Imagine return an array like
     [{id:1,label:...,href:...},
      {id:2,label:...,href:...}..]
    */
  getMenu() {
    //return this.httpClient.get("myApi/menu");
    //I simulate using of and delay
    return of([
      { id: 1, href: '', label: 'Home' },
      { id: 2, href: '', label: 'Servicios' },
      { id: 3, href: '', label: 'About' },
      { id: 4, href: '', label: 'Contact' },
    ]);
  }

  getSubMenu() {
    //return this.httpClient.get("myApi/submenu");
    //I simulate uing of and delay
    return of([
      { id: 1, href: '', label: 'Submenu1', menuId: 2 },
      { id: 2, href: '', label: 'Submenu2', menuId: 2 },
      { id: 3, href: '', label: 'Submenu3', menuId: 2 },
      { id: 4, href: '', label: 'Submenu4', menuId: 2 },
      { id: 5, href: '', label: 'Submenu1', menuId: 3 },
      { id: 6, href: '', label: 'Submenu2', menuId: 3 },
      { id: 7, href: '', label: 'Submenu3', menuId: 3 },
      { id: 8, href: '', label: 'Submenu4', menuId: 3 },
    ]);
  }
  getAllMenu() {
    return of([
      { id: 1, href: '', label: 'Home' },
      { id: 2, href: '', label: 'Servicios' },
      { id: 3, href: '', label: 'About' },
      { id: 4, href: '', label: 'Contact' },
      { id: 5, href: '', label: 'Submenu1', menuId: 2 },
      { id: 6, href: '', label: 'Submenu2', menuId: 2 },
      { id: 7, href: '', label: 'Submenu3', menuId: 2 },
      { id: 8, href: '', label: 'Submenu4', menuId: 2 },
      { id: 9, href: '', label: 'Submenu1', menuId: 3 },
      { id: 10, href: '', label: 'Submenu2', menuId: 3 },
      { id: 11, href: '', label: 'Submenu3', menuId: 3 },
      { id: 12, href: '', label: 'Submenu4', menuId: 3 },
      { id: 13, href: '', label: 'Submenu1', menuId: 8 },
      { id: 14, href: '', label: 'Submenu2', menuId: 8 },
      { id: 15, href: '', label: 'Submenu3', menuId: 8 },
      { id: 16, href: '', label: 'Submenu4', menuId: 8 },
      { id: 17, href: '', label: 'p1', menuId: 16 },
      { id: 18, href: '', label: 'p2', menuId: 16 },
      { id: 19, href: '', label: 'p3', menuId: 16 },
      { id: 20, href: '', label: 'p4', menuId: 16 },
      { id: 21, href: '', label: 'p5', menuId: 16 },
      { id: 22, href: '', label: 'a1', menuId: 21 },
      { id: 23, href: '', label: 'a2', menuId: 21 },
      { id: 24, href: '', label: 'a3', menuId: 21 },
      { id: 25, href: '', label: 'a4', menuId: 21 },
      { id: 26, href: '', label: 'a5', menuId: 21 },
      { id: 27, href: '', label: 'J1', menuId: 26 },
      { id: 28, href: '', label: 'J2', menuId: 26 },
      { id: 29, href: '', label: 'J3', menuId: 26 },
      { id: 30, href: '', label: 'J4', menuId: 26 },
      { id: 31, href: '', label: 'J5', menuId: 26 },
    ]);
  }
  getObjectMenu() {
    return forkJoin([this.getMenu(), this.getSubMenu()]).pipe(
      map(([menu, submenu]: [any[], any[]]) => {
        return menu.map((x: any) => ({
          ...x,
          children: submenu.filter((s) => s.menuId == x.id),
        }));
      })
    );
  }
  getObjectMenu2() {
    return this.getAllMenu().pipe(
      map((menu: any[]) =>
        menu
          .filter((x) => !x.menuId)
          .map((x) => ({ ...x, children: this.getChildren(menu, x.id) }))
      )
    );
  }
  getChildren(menu: any[], id: number) {
    return menu
      .filter((x) => x.menuId == id)
      .map((x: any) => {
        return {
          ...x,
          children: this.getChildren(menu, x.id),
        };
      });
  }
}
