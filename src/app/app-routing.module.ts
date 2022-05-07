import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { IncubatorComponent } from './incubator/incubator.component';

const routes: Routes = [
  {path: 'LogIn', component: LogInComponent},
  {path:'', component:AppComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'user', component:UserComponent},
  {path:'admin', component:AdminComponent},
  {path:'incubator', component:IncubatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AppComponent, LogInComponent,
  RegistrationComponent, AdminComponent, IncubatorComponent]
