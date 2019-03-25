import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './componeents/admin/admin.component';
import { HomeComponent } from './componeents/home/home.component';
import { ViewRegistrationComponent } from './componeents/view-registration/view-registration.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'admin',
    component: AdminComponent
  },
  { path: 'admin/view/:id',
    component: ViewRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
