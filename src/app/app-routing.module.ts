import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CompComponent } from './comp/comp.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { MiniWordComponent } from './miniword/miniword.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: 'cv/list',
    component: ListComponent
  },
  {
    path: 'cv/item',
    component: ItemComponent
  },
  {
    path: 'cv/detail',
    component: DetailComponent
  },
 
  {
    path: 'miniword',
    component: MiniWordComponent
  },
  {
    path: 'navbar',
    component: NavigationComponent
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
    path: 'color/:color',
    component: ColorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
