import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TaskTableComponent } from './works/tasklist/task-table/task-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CenzorComponent,
    TasklistComponent,
    UserslistComponent,
    TaskTableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
