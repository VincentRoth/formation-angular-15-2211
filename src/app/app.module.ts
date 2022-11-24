import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimalModule } from './animal/animal.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VetModule } from './vet/vet.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimalModule,
    HttpClientModule,
    VetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
