import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { Route, RouterModule } from '@angular/router';
import { ComidasComponent } from './pages/comidas/comidas.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import {HttpClientModule} from '@angular/common/http'

const Routes: Route[] = [
  {
  path: '',
  component: HomeComponent
  },
  {
    path: 'comidas',
  component: ComidasComponent
  },
  {
    path: 'bebidas',
  component: BebidasComponent
  }
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContentComponent,
    ComidasComponent,
    BebidasComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
