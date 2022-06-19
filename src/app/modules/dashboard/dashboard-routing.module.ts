import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonalComponent } from "./components/personal/personal.component";
import { ResidentialFormComponent } from "./components/residential-form/residential-form.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "dashboard",
        pathMatch: "full",
        redirectTo: "personal",
      },
      {
        path: "personal",
        component: PersonalComponent
      },
      {
        path: "residential",
        component: ResidentialFormComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
