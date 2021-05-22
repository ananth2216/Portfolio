import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: HeaderNavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
