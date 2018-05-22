import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';
import { PhoneFilterPipe } from './employee/phone-filter.pipe';
import { SearchFilterPipe } from './employee/search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PhoneFilterPipe,
    SearchFilterPipe
    
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
