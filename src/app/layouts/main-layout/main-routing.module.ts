import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonalGuard } from "@app-core/guards/personal-guard/personal.guard";
import { ResidentialGuard } from "@app-core/guards/residential-guard/residential.guard";
import { MainLayoutComponent } from "./main-layout.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "personal",
      },
      {
        path: "personal",
        pathMatch: "full",
        loadChildren: () =>
          import("@app-modules/personal/personal.module").then(
            (m) => m.PersonalModule
          ),
      },
      {
        path: "residential",
        pathMatch: "full",
        loadChildren: () =>
          import("@app-modules/residential-form/residential-form.module").then(
            (m) => m.ResidentialFormModule
          ),
      },
      {
        path: "resume",
        pathMatch: "full",
        loadChildren: () =>
          import("@app-modules/resume/resume.module").then(
            (m) => m.ResumeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
