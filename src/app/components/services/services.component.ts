import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import sendEmail from '../../utils/emailHandler';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  public form_data: FormGroup;

  constructor(private fb: FormBuilder,) {
    this.form_data = this.fb.group({
      names: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    try {
      if(this.form_data.invalid) return;
      /* const res = sendEmail(this.form_data.value); */
    } catch (error) {
      
    }
  }
}
