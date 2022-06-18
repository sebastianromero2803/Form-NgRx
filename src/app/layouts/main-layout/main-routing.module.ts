import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./main-layout.component";
import { PuntosColombiaComponent } from "@app-modules/puntos-colombia/components/principal/puntos-colombia.component";
import { UberComponent } from "@app-modules/uber/components/principal/uber.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard",
      },
      {
        path: "dashboard",
        pathMatch: "full",
        loadChildren: () =>
          import("@app-modules/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'uber',
        component: UberComponent
      },
      {
        path: 'puntos',
        component: PuntosColombiaComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
