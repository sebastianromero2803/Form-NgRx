import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "@shared/angular-material/angular-material.module";

import { MainLayoutComponent } from "./main-layout.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

import { MainRoutingModule } from "./main-routing.module";
import { PersonalModule } from '../../modules/personal/personal.module';
import { ResidentialFormModule } from '../../modules/residential-form/residential-form.module';
import { ResumeModule } from '../../modules/resume/resume.module';

@NgModule({
  declarations: [MainLayoutComponent, ToolbarComponent],
  imports: [
    AngularMaterialModule,
    RouterModule,
    MainRoutingModule,
    CommonModule,
    PersonalModule,
    ResidentialFormModule,
    ResumeModule
  ],
  providers: [],
})
export class MainLayoutModule {}
