import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "../dashboard/dashboard-routing.module";
import { AngularMaterialModule, FormsModule } from '@shared/index';

import { DashboardComponent } from "./dashboard.component";

import { ReactiveFormsModule } from "@angular/forms";

import { PipesModule } from "@shared/pipes/pipes.module";
import { DirectivesModule } from "@shared/directives/directives.module";
import { ResidentialFormComponent } from './components/residential-form/residential-form.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PersonalComponent } from './components/personal/personal.component';

@NgModule({
  declarations: [DashboardComponent, ResidentialFormComponent, ResumeComponent, PersonalComponent],
  imports: [CommonModule, DashboardRoutingModule, AngularMaterialModule, FormsModule, ReactiveFormsModule, PipesModule, DirectivesModule],
})
export class DashboardModule {}
