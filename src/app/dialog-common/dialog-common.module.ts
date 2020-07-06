import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogCommonComponent } from './dialog-common/dialog-common.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [DialogCommonComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DialogCommonModule { }
