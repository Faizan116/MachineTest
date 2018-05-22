import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';
import { PhoneFilterPipe } from './employee/phone-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PhoneFilterPipe
    
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
