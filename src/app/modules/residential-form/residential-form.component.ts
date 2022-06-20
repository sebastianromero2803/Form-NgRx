import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { storeResidential } from '@app-core/store/actions/residential.action';
import { ResidentialState } from '@app-core/store/models/residential.model';
import { getResidentialInfo } from '@app-core/store/selectors/residential.selector';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';

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

    this.store.select(getResidentialInfo).subscribe((result: ResidentialState) => {
      this.residentialForm.setValue({
        direction: result.direction,
        neighborhood: result.neighborhood,
        department: result.department,
        city: result.city
      });
    });

  }

  saveResidential() {
    const payload = this.residentialForm.getRawValue()
    this.store.dispatch(storeResidential({ storePayload: payload }));
  }

  public canExit(): boolean {
    if (!this.residentialForm.valid) {
      Swal.fire(
        "No puedes salir de la página hasta llenar todos los campos con datos válidos."
      );
      return false;
    }
    return true;
  }

}
