import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) { }

  error(err: any) {
    let msg = 'Algum erro aconteceu!';

    if(typeof err === 'string') {
      msg = err;
    } else {
      console.log(err);
      msg = err.error[0].message;
    }

    this.messageService.add({
      severity: 'error',
      summary: environment.ErrorSummaryMessages[
        Math.floor(Math.random() * environment.ErrorSummaryMessages.length)
        ],
      detail: msg,
      closable: true,
      life: 10000
    });
  }
}
