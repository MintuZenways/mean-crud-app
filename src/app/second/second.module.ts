import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second.component';


@NgModule({
  declarations: [
    SecondComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class SecondModule { }
