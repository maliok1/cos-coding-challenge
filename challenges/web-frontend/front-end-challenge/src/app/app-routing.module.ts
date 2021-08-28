import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'overview', component:  OverviewPageComponent},
  { path: '**', component:LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
