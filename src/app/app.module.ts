import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { SecondService } from './second.service';
import { TodoComponent } from './todo/todo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './navigation/navigation.component';
import { CompComponent } from './comp/comp.component';
import { HeaderComponent } from './header/header.component';
import { MiniWordComponent } from './miniword/miniword.component';


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    TodoComponent,
    NavigationComponent,
    CompComponent,
    HeaderComponent,
    MiniWordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
