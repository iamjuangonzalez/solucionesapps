import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  public form_data: FormGroup;
  public send_email_true: boolean = false;

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
      if (this.form_data.invalid) return;
      this.send_email_true = true;
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        this.send_email_true = false;
        this.form_data.reset();
      }, 3000)
    }

  }
}
