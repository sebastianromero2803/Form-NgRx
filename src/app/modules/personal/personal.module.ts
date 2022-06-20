import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@shared/index';
import { PersonalComponent } from './personal.component';


@NgModule({
  declarations: [
    PersonalComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonalModule { }
