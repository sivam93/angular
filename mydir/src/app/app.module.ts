import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';



import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpInterceptorModule } from './services/security/http-interceptor';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';
import { NavComponent } from 'src/app/components/layout/nav/nav.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { ViewsComponent } from 'src/app/components/layout/views/views.component';



const component = [
  AppComponent,
  HeaderComponent,
  NavComponent,
  LayoutComponent,
  ViewsComponent
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LayoutComponent,
    ViewsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),    
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
