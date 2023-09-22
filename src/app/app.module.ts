import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HistoryComponent } from './pages/history/history.component';
import { ResultComponent } from './components/result/result.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HistoryListComponent } from './components/history-list/history-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    HistoryComponent,
    ResultComponent,
    LayoutComponent,
    HistoryListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
