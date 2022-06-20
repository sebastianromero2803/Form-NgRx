import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { storePersonal } from '@app-core/store/actions/personal.action';
import { PersonalState } from '@app-core/store/models/personal.model';
import { getPersonalInfo } from '@app-core/store/selectors/personal.selector';
import { Store } from "@ngrx/store";
import Swal from 'sweetalert2';

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
    
    this.store.select(getPersonalInfo).subscribe((result: PersonalState) => {
      this.personalForm.setValue({
        name: result.name,
        lastName: result.lastName,
        age: result.age,
        email: result.email,
        phone: result.phone
      });
    });

  }

  savePersonal() {
    const payload = this.personalForm.getRawValue()
    this.store.dispatch(storePersonal({ storePayload: payload }));
  }

  public canExit(): boolean {
    if (!this.personalForm.valid) {
      Swal.fire(
        "No puedes salir de la página hasta llenar todos los campos con datos válidos."
      );
      return false;
    }
    return true;
  }

}
