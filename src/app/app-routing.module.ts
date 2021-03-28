import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompComponent } from './comp/comp.component';
import { CvComponent } from './cv/cv.component';
import { MiniWordComponent } from './miniword/miniword.component';
import { NavigationComponent } from './navigation/navigation.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
