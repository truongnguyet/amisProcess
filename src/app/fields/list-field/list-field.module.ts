import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListFieldComponent } from './list-field.component';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListFieldComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [ListFieldComponent]
})
export class ListFieldModule { }
