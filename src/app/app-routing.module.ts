import { NgModule } from '@angular/core';
import { ContactsComponent } from "./contacts/contacts.component"
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleComponent } from './people/people.component';
import { SpaceshipsComponent } from './spaceships/spaceships.component';
import { FilmsComponent } from './films/films.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'spaceships', component: SpaceshipsComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ContactDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
