import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentialGuard } from '@app-core/guards/residential-guard/residential.guard';
import { ResidentialFormComponent } from './residential-form.component';

const routes: Routes = [
  {
    path: "",
    component: ResidentialFormComponent,
    canDeactivate: [ResidentialGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentialFormRoutingModule { }
