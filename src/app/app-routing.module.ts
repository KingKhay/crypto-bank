import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {UserAgreementComponent} from "./pages/user-agreement/user-agreement.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'legal', component: UserAgreementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
