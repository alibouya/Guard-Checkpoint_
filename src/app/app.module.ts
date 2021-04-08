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
import { DetailComponent} from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { ColorComponent } from './color/color.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { NF404Component } from './nf404/nf404.component';
import { LemassiffComponent } from './lemassiff/lemassiff.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { FormsExampleComponent } from './forms-example/forms-example.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './cv/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    TodoComponent,
    NavigationComponent,
    CompComponent,
    HeaderComponent,
    MiniWordComponent,
    DetailComponent,
    ListComponent,
    ItemComponent,
    RouterSimulatorComponent,
    SayHelloComponent,
    ColorComponent,
    AddPersonComponent,
    FrontComponent,
    BackComponent,
    ErrorcomponentComponent,
    NF404Component,
    LemassiffComponent,
    EmbaucheComponent,
    DetailPersonComponent,
    FormsExampleComponent,
    LoginComponent,
    AddComponent
    
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
