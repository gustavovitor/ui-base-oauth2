import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule, InputTextModule } from 'primeng/primeng';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ]
})
export class SharedModule { }
