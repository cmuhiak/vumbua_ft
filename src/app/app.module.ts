import { ApplicationModule, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatDialogModule} from '@angular/material/dialog';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatMenuModule} from '@angular/material/menu';
import { MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { IncubatorComponent } from './incubator/incubator.component';


@NgModule ({
  imports: [
  MatSliderModule,
  BrowserAnimationsModule,
  BrowserModule,
  AppRoutingModule,
  ApplicationModule,
  ReactiveFormsModule,
  FormsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTabsModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  HttpClientModule,

 


],

schemas: [CUSTOM_ELEMENTS_SCHEMA],

declarations: [
  LogInComponent,
  AppComponent,
  routingComponents,
  RegistrationComponent,
  UserComponent,
  AdminComponent,
  IncubatorComponent
],

providers: [],
  bootstrap: [AppComponent]

})



export class AppModule { }
