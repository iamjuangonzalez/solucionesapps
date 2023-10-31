import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  public send_email_true: boolean = false;

  constructor() { }

}
