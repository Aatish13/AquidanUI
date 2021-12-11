import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutUSComponent},
  {path:'contact-us',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }