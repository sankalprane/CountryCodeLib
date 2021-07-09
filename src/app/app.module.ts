import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2TelInputModule} from 'ng2-tel-input';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CountrycodeComponent } from './countrycode/countrycode.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrycodeComponent
  ],
  imports: [
    BrowserModule,
    Ng2TelInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
