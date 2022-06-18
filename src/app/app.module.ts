import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routing } from "./app-routing.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { reducers } from './core/store/index';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    MainLayoutModule,
    Routing,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({}),
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
  title = "form-ngrx";
 }
