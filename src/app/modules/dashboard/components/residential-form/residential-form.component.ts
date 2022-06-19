import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { storeResidential } from '@app-core/store/actions/residential.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-residential-form',
  templateUrl: './residential-form.component.html',
  styleUrls: ['./residential-form.component.scss']
})
export class ResidentialFormComponent {

  residentialForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.residentialForm = this.fb.group({
      direction: ['', Validators.required],
      neighborhood: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  saveResidential() {
    const payload = this.residentialForm.getRawValue()
    this.store.dispatch(storeResidential({ storePayload: payload }));
  }

}
