import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppBaseComponent } from './base/base.component';
import { AppCardComponent } from './card/card.component';
import { AppListaSonoComponent } from './lista-sono/lista-sono.component';
AppListaSonoComponent
@NgModule({
  declarations: [
    AppBaseComponent,
    AppCardComponent,
    AppListaSonoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppBaseComponent]
})
export class AppModule { }
