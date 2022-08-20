import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import { TestingCompComponent } from './testing-comp/testing-comp.component';
import { UserListViewComponent } from './views/user-list-view/user-list-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserDetailComponent } from './views/user-detail/user-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TestingCompComponent,
    UserListViewComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AdminModule { }
