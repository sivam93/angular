import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PopupModalComponent } from 'src/app/components/popup-modal/popup-modal.component';
import { NavTabsComponent } from 'src/app/components/nav-tabs/nav-tabs.component';
import { TableheaderComponent } from 'src/app/components/table-header/tableheader.component';
import { SearchinvoicesComponent } from 'src/app/modules/collections/components/searchinvoices/searchinvoices.component';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { InputtextComponent } from 'src/app/modules/collections/components/inputtext/inputtext.component';
import { HeadingComponent } from 'src/app/components/heading/heading.component';
import {NavigationComponent} from 'src/app/components/navigation/navigation.component';


import { NgxPaginationModule } from 'ngx-pagination';
import { DpDatePickerModule } from 'ng2-date-picker';
import { ChartsModule } from 'ng2-charts';
import { SelectModule } from 'ng2-select';

import { SearchInvoicesPipe } from 'src/app/pipes/search-invoices.pipe';
import { SearchExceptionsPipe } from 'src/app/pipes/search-exceptions.pipe';
import { MoneyconverterPipe } from 'src/app/pipes/moneyconverter.pipe';
import { RemoveNullPipe } from 'src/app/pipes/remove-null.pipe';


const plugins = [
  NgxPaginationModule,
  DpDatePickerModule,
  SelectModule,
  ChartsModule
]

const pipes = [
  SearchInvoicesPipe,
  SearchExceptionsPipe,
  MoneyconverterPipe,
  RemoveNullPipe
]

const components = [
  PopupModalComponent,
  NavTabsComponent,
  TableheaderComponent,
  SearchinvoicesComponent,
  BreadcrumbComponent,
  InputtextComponent,
  HeadingComponent,
  NavigationComponent
]

@NgModule({
  declarations: [
    ...components,
    ...pipes
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ...plugins
  ],
  exports:[
    FormsModule,
    ...components,
    ...plugins,
    ...pipes
  ]
})
export class SharedModule { }
