import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleComponent } from './people/people.component';
import { SpaceshipsComponent } from './spaceships/spaceships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlanetsComponent,
    PeopleComponent,
    SpaceshipsComponent,
    VehiclesComponent,
    FilmsComponent,
    SpeciesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
