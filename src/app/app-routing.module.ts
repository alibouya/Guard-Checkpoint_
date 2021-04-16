import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { BackComponent } from './back/back.component';
import { ColorComponent } from './color/color.component';
import { CompComponent } from './comp/comp.component';
import { CvComponent } from './cv/cv.component';
import { AddComponent } from './cv/add/add.component';

import { DetailPersonComponent } from './detail-person/detail-person.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { FrontComponent } from './front/front.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { MiniWordComponent } from './miniword/miniword.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NF404Component } from './nf404/nf404.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { TodoComponent } from './todo/todo.component';
import { AsyncProgComponent } from './asyncProg/async-prog/async-prog.component';
import { ExampleguardGuard } from './Guards/exampleguard.guard';
import { AuthGuard } from './cv/guards/auth.guard';
import { NotloggedGuard } from './cv/guards/notlogged.guard';

const routes: Routes = [
 
  {
    path: 'cv',
    children:[
      
      {path : '',component: CvComponent},
      {
        path: 'add',component: AddComponent,
        canActivate:[AuthGuard]
      },
      {
        path: ':id',component: DetailPersonComponent
      },
    {
      path: 'list', component: ListComponent
    },
    {
      path: 'item', component: ItemComponent
    },
    {
      path: 'detail',component: DetailComponent
    },
    
    
    ],
  },{
    path: 'asynch',
    component: AsyncProgComponent
  },
  
    {
      path: 'front', component: FrontComponent,
      children :[
        {
          path: 'color/:color',
          component: ColorComponent
        }
      ]
    },
    {
      path: 'back', component: BackComponent,
      children :[
        {
          path: 'todo',
          component: TodoComponent,
          canActivate:[ExampleguardGuard]
        }]
    },
    {
      path: 'todo',
      component: TodoComponent,
      canActivate:[ExampleguardGuard]
    },
  {
    path: 'miniword',
    component: MiniWordComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[NotloggedGuard]
  },
  {
    path: 'navbar',
    component: NavigationComponent
  },
  {
    path: 'header',
    component:HeaderComponent
  },
  {
    path: 'footer',
    component: CompComponent
  },
  {
    path: 'hello/:name/:firstname',
    component: SayHelloComponent
  },
  {
    path: '', redirectTo:'header', pathMatch: 'full'
  
  }, {
    path: '**', component: NF404Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
