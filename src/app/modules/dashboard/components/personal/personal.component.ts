import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { storePersonal } from '@app-core/store/actions/personal.action';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  personalForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.personalForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ["", Validators.required],
      age: [0, [Validators.required, Validators.min(1), Validators.max(125)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required]
    });
  }

  savePersonal() {
    const payload = this.personalForm.getRawValue()
    this.store.dispatch(storePersonal({ storePayload: payload }));
  }

}
