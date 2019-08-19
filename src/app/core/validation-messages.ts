import {ErrorMessage} from 'ng-bootstrap-form-validation';
import { MinLengthValidator } from '@angular/forms';

export const CUSTOM_ERRORS: ErrorMessage[] = [
  {
    error: 'required',
    format: requiredFormat
  }, {
    error: 'email',
    format: emailFormat
  }, {
    error: 'senhasNaoCoincidem',
    format: senhasNaoCoincidemFormat
  }, {
    error: 'minlength',
    format: minLengthFormat
  }
];

export function requiredFormat(label: string, error: any): string {
  return `${label} é obrigatório(a)!`;
}

export function emailFormat(label: string, error: any): string {
  return `${label} não parece um email válido.`;
}

export function minLengthFormat(label: string, error: any): string {
  return `${label} precisa ter no mínimo ${error.requiredLength} caracteres.`;
}

export function senhasNaoCoincidemFormat(): string {
  return `As senhas não são iguais.`;
}
