import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [ // export for the DemoModule
    AppComponent,
    
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
