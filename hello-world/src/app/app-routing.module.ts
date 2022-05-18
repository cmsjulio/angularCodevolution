import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './routing/department-list/department-list.component';
import { EmployeeListComponent } from './routing/employee-list/employee-list.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full'},
  { path: 'departments', component: DepartmentListComponent},
  { path: 'employees', component: EmployeeListComponent},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent]
