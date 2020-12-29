import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FirstComponent } from '../app/first/first.component';
import { SecondComponent } from '../app/second/second.component';

const routes: Routes = [ // sets up routes constant where you define your routes
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
