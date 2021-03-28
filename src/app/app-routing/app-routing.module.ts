import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompComponent } from '.././comp/comp.component';
import { NavigationComponent } from '.././navigation/navigation.component';

const routes: Routes = [
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
