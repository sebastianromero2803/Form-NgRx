import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { storePersonal } from '@app-core/store/actions/personal.action';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  personalForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.personalForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ["", Validators.required],
      age: [0, [Validators.required, Validators.min(0), Validators.max(125)]],
      email: ["", Validators.required],
      phone: ["", Validators.required]
    });
  }

  get getName() {
    return this.personalForm.get("name");
  }

  get getLastName() {
    return this.personalForm.get("lastName");
  }

  get getAge() {
    return this.personalForm.get("rangeAge");
  }

  get getEmail() {
    return this.personalForm.get("email");
  }

  get getPhone() {
    return this.personalForm.get("phone");
  }

  savePersonal() {
    const payload = this.personalForm.getRawValue()
    this.store.dispatch(storePersonal({ storePayload: payload }));
  }

  ngOnInit(): void { }

}
