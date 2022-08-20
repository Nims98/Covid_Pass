import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TestingCompComponent} from './testing-comp/testing-comp.component';
import {UserListViewComponent} from './views/user-list-view/user-list-view.component';
import {UserDetailComponent} from './views/user-detail/user-detail.component';

const routes: Routes = [

  { path:'',
    component:DashboardComponent,
    children:[
      {path:'',component:TestingCompComponent},
      {path:'users',component:UserListViewComponent},
      { path: 'user-detail/:id', component: UserDetailComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
