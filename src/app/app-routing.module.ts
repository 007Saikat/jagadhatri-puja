import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './services/auth.guard';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },  
  {path:'login',component:LandingComponent},  
  { path: '',component:LandingComponent },
  // { path: 'home', component:HomeComponent,canActivate:[AuthGuard]},
  { path: 'home', component:HomeComponent},
  { path: 'logout',component: LandingComponent},
  { path: 'add', component: TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
