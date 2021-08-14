import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFormComponent } from './main-form.component';
import { MainFromRoutingModule } from './main-form-routing.module';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {SkeletonModule} from 'primeng/skeleton';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MainFromRoutingModule,
    AutoCompleteModule,
    SkeletonModule,
    FormsModule,
  ],
  declarations: [MainFormComponent]
})
export class MainFormModule { }
