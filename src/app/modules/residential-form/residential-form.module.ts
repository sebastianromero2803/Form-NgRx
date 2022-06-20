import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentialFormRoutingModule } from './residential-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@shared/index';
import { ResidentialFormComponent } from './residential-form.component';

@NgModule({
  declarations: [
    ResidentialFormComponent
  ],
  imports: [
    CommonModule,
    ResidentialFormRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResidentialFormModule { }
