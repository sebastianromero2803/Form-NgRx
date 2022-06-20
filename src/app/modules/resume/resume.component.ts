import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalState } from '@app-core/store/models/personal.model';
import { ResidentialState } from '@app-core/store/models/residential.model';
import { getPersonalInfo } from '@app-core/store/selectors/personal.selector';
import { getResidentialInfo } from '@app-core/store/selectors/residential.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  personalForm: FormGroup;
  residentialForm: FormGroup;
  personalInfo: PersonalState = {} as PersonalState;

  constructor(private fb: FormBuilder, private store: Store) {

    this.personalForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ["", Validators.required],
      age: [0, [Validators.required, Validators.min(1), Validators.max(125)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required]
    });

    this.residentialForm = this.fb.group({
      direction: ['', Validators.required],
      neighborhood: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required]
    });

    this.store.select(getPersonalInfo).subscribe((result: PersonalState) => {
      this.personalForm.patchValue({
        name: result.name,
        lastName: result.lastName,
        age: result.age,
        email: result.email,
        phone: result.phone
      });;
      this.personalForm.disable();
    });

    this.store.select(getResidentialInfo).subscribe((result: ResidentialState) => {
      this.residentialForm.patchValue({
        direction: result.direction,
        neighborhood: result.neighborhood,
        department: result.department,
        city: result.city
      });
      this.residentialForm.disable();
    });
    
  }

}
