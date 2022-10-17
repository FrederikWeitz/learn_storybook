import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent} from './Header/app-header.component';

import ButtonComponent from '../stories/button.component';
import DeutschlandComponent from '../stories/widget-integration/deutschland.component';
import HorseButtonComponent from '../stories/widget-integration/horse-button.component';
import ModernButtonComponent from '../stories/modern-button/modern-button.component';
import RectangleAnimationComponent from '../stories/widget-integration/rectangle-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ButtonComponent,
    DeutschlandComponent,
    HorseButtonComponent,
    ModernButtonComponent,
    RectangleAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
