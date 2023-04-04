import { NgModule } from '@angular/core';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MissionlistComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
