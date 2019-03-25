import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './componeents/admin/admin.component';
import {HomeComponent} from './componeents/home/home.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
