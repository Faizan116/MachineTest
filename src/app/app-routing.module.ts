import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { AddFornComponent } from './add-forn/add-forn.component';
import { EmployeeComponent} from './employee/employee.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const appRoutes: Routes =[
  {path:'employees', component:EmployeeComponent},
  {path: '', redirectTo:'/employees',pathMatch:'full' },
    {path: 'employees/add', component:AddFornComponent },
    {path: 'employees/:id/edit', component:EditFormComponent }
 

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]


})
export class AppRoutingModule { }
