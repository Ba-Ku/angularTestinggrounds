import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CountdownComponent} from './countdown.component';
import {MandatoryDirective} from './mandatory.directive';
import {FormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/tabview";
import { PersonPipe } from './person.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    MandatoryDirective,
    PersonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
