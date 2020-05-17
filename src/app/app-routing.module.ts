import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CountriesComponent } from './component/countries/countries.component';


const routes: Routes = [
{path : '' , component : HomeComponent},
{path : 'countries', component : CountriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
