import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) {}

  success(msg: string) {
    this.messageService.add({
      severity: 'success',
      summary: environment.SuccessSummaryMessages[
        Math.floor(Math.random() * environment.SuccessSummaryMessages.length)
        ],
      detail: msg,
      closable: true,
      life: 10000
    });
  }

  warning(msg: string) {
    this.messageService.add({
      severity: 'warn',
      summary: environment.WarningSummaryMessages[
        Math.floor(Math.random() * environment.WarningSummaryMessages.length)
        ],
      detail: msg,
      closable: true,
      life: 10000
    });
  }

  info(msg: string) {
    this.messageService.add({
      severity: 'info',
      summary: environment.InfoSummaryMessages[
        Math.floor(Math.random() * environment.InfoSummaryMessages.length)
        ],
      detail: msg,
      closable: true,
      life: 10000
    });
  }
}
