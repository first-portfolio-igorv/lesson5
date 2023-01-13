import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { UserslistComponent } from './works/userslist/userslist.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"works/cenzor",component:CenzorComponent},
  {path:"works/tasklist",component:TasklistComponent},
  {path:"works/userslist",component:UserslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
