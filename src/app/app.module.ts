import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item.component';
import { AppRoutingModule } from './app.routing'; // CLI imports router


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule,FormsModule,HttpClientModule ],
  declarations: [ AppComponent, MenuItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
