import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalGuard } from '@app-core/guards/personal-guard/personal.guard';
import { PersonalComponent } from './personal.component';

const routes: Routes = [
  {
    path: "",
    component: PersonalComponent,
    canDeactivate: [PersonalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
