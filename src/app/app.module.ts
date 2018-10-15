import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesListDeletedComponent } from './articles-list-deleted/articles-list-deleted.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticlesListDeletedComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
