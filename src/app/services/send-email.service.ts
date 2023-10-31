import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  public send_email_true: boolean = false;
  public servide_id: string = 'service_wobwdhb';
  public template_id_new_client: string = 'template_5nt17ya';
  public public_key: string = 'pEXBj6IANNiBs_lgX'

  constructor() { }

  sendEmail = (emailData: any) => {
    emailjs.send(this.servide_id, this.template_id_new_client, emailData, this.public_key)
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

}
