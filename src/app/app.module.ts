import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

@NgModule({
  declarations: [
    AppComponent,
    TemperatureConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterTestingModule,
    RouterModule.forRoot([{ path: "", component: TemperatureConverterComponent }]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
