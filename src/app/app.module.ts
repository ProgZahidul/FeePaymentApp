import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FeeTypeCreateComponent } from './feetype/fee-type-create/fee-type-create.component';
import { FeeTypeListComponent } from './feetype/fee-type-list/fee-type-list.component';
import { FeeTypeEditComponent } from './feetype/fee-type-edit/fee-type-edit.component';
import { FeeStructureCreateComponent } from './feestructure/fee-structure-create/fee-structure-create.component';
import { FeeStructureEditComponent } from './feestructure/fee-structure-edit/fee-structure-edit.component';
import { FeeStructureListComponent } from './feestructure/fee-structure-list/fee-structure-list.component';
import { DueBalanceCreateComponent } from './deubalace/due-balance-create/due-balance-create.component';
import { DueBalanceEditComponent } from './deubalace/due-balance-edit/due-balance-edit.component';
import { DueBalanceListComponent } from './deubalace/due-balance-list/due-balance-list.component';
import { FeePaymentListComponent } from './feepayment/fee-payment-list/fee-payment-list.component';
import { FeePaymentCreateComponent } from './feepayment/fee-payment-create/FeePaymentCreateComponent';
import { FeePaymentEditComponent } from './feepayment/fee-payment-edit/fee-payment-edit.component';
import { FeePaymentDetailsComponent } from './feepayment/fee-payment-details/fee-payment-details.component';
import { FeePaymentService } from './Services/fee-payment.service';

@NgModule({
  declarations: [
    AppComponent,
    FeePaymentListComponent,
    FeePaymentCreateComponent,
    FeePaymentEditComponent,
    FeePaymentDetailsComponent,
    FeeTypeCreateComponent,
    FeeTypeListComponent,
    FeeTypeEditComponent,
    FeeStructureCreateComponent,
    FeeStructureEditComponent,
    FeeStructureListComponent,
    DueBalanceCreateComponent,
    DueBalanceEditComponent,
    DueBalanceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [FeePaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
