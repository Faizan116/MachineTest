import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';
import { InMemoryMockDataService } from './in-memory-mock-data.service';
import { PhoneFilterPipe } from './employee/phone-filter.pipe';
import { SearchFilterPipe } from './employee/search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { AddFornComponent } from './add-forn/add-forn.component';
import { EditFormComponent } from './edit-form/edit-form.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PhoneFilterPipe,
    SearchFilterPipe,
    AddFornComponent,
    EditFormComponent
    
  ],
  imports: [BrowserModule, FormsModule,
    HttpClientModule,  
    HttpClientInMemoryWebApiModule.forRoot(InMemoryMockDataService),
    AppRoutingModule
  ],
  providers: [EmployeeService,InMemoryMockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
