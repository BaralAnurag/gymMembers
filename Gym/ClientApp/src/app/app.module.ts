import { GymMemberService } from './services/gym-member.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { GymMemberComponent } from './gym-member/gym-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AddMemberComponent } from './add-member/add-member.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    GymMemberComponent ,
    EditMemberComponent ,
    AddMemberComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: GymMemberComponent, pathMatch: 'full' },
      { path: 'editMember/:id', component: EditMemberComponent },
      { path: 'addMember', component: AddMemberComponent },
    ])
  ],
  providers: [
    GymMemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
