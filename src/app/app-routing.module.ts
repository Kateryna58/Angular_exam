import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleComponent } from './people/people.component';
import { SpaceshipsComponent } from './spaceships/spaceships.component';
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'spaceships', component: SpaceshipsComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
