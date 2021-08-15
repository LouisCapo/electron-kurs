import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFormComponent } from './main-form.component';
import { MainFromRoutingModule } from './main-form-routing.module';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {SkeletonModule} from 'primeng/skeleton';
import { FormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import { PictureInfoComponent } from './components/picture-info/picture-info.component';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { PictureTableComponent } from './components/picture-table/picture-table.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';
import { CreatingComponent } from './components/creating/creating.component';
import {CalendarModule} from 'primeng/calendar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsComponent } from './components/charts/charts.component';

@NgModule({
  imports: [
    CommonModule,
    MainFromRoutingModule,
    AutoCompleteModule,
    SkeletonModule,
    FormsModule,
    TabViewModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    AccordionModule,
    CalendarModule,
    NgxChartsModule,
  ],
  declarations: [
    MainFormComponent, 
    PictureInfoComponent, 
    PictureTableComponent, 
    CreatingComponent, 
    ChartsComponent,
  ]
})
export class MainFormModule { }
