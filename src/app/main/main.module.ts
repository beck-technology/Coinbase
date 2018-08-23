import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    MainComponent,
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    StatusBarComponent,
    SideBarComponent,
    GraphComponent,
  ]
})
export class MainModule { }
