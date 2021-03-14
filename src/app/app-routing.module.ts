import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasListComponent } from './component/peliculas-list/peliculas-list.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { SeriesListComponent } from './component/series-list/series-list.component';


const routes: Routes = [
  {path:'principal', component: PrincipalComponent},
  {path:'peliculas-list', component: PeliculasListComponent},
  {path:'series-list', component: SeriesListComponent},  
  {path: '**', pathMatch: 'full', redirectTo: 'principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
