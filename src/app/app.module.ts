import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MicroAppComponent } from './micro-app/micro-app.component';
import { DomainServiceProvider } from './_domain/domain.service.provider';

const ROUTES_APP: Routes = [
  {
    path: 'app1',
    children: [{ path: '**', component: MicroAppComponent }]
  },
  {
    path: 'app2',
    children: [{ path: '**', component: MicroAppComponent }]
  },
  {
    path: '',
    redirectTo: 'app1',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MicroAppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES_APP)
  ],
  providers: [
    DomainServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
