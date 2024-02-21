// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeePaymentListComponent } from './feepayment/fee-payment-list/fee-payment-list.component';
import { FeePaymentCreateComponent } from './feepayment/fee-payment-create/FeePaymentCreateComponent';
import { FeePaymentDetailsComponent } from './feepayment/fee-payment-details/fee-payment-details.component';
import { FeePaymentEditComponent } from './feepayment/fee-payment-edit/fee-payment-edit.component';

const routes: Routes = [
  { path: 'fee-payments', component: FeePaymentListComponent },
  { path: 'fee-payments/create', component: FeePaymentCreateComponent },
  { path: 'fee-payments/:id', component: FeePaymentDetailsComponent },
  { path: 'fee-payments/:id/edit', component: FeePaymentEditComponent },
  { path: '', redirectTo: '/fee-payments', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
