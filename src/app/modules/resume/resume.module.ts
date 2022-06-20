import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@shared/index';
import { ResumeComponent } from './resume.component';


@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResumeModule { }
