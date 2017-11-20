import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes,RouterModule } from '@angular/router';
const userRoute: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: UserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoute)
  ],
  declarations: [UserComponent]
})
export class UserModule { }
