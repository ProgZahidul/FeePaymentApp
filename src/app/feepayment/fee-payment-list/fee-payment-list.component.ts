

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FeePaymentService } from '../../Services/fee-payment.service';

@Component({
  selector: 'app-fee-payment-list',
  templateUrl: './fee-payment-list.component.html',
  styleUrls: ['./fee-payment-list.component.css']
})
export class FeePaymentListComponent implements OnInit {
  feePayments: any[] = [];
  searchStudentId: number | undefined;

  constructor(
    private feePaymentService: FeePaymentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFeePayments();
  }

  getFeePayments(): void {
    this.feePaymentService.getFeePayments()
      .subscribe(data => {
        this.feePayments = data;
      });
  }

  goToFeePaymentDetails(id: number): void {
    this.router.navigate(['/fee-payments', id]);
  }

  deleteFeePayment(feePaymentId: number) {
    this.feePaymentService.deleteFeePayment(feePaymentId).subscribe(
      () => {
        console.log('Fee payment deleted successfully.');
        // Optionally, you can reload the fee payments after deletion
        this.getFeePayments();
        
      },
      (error) => {
        console.error('Error deleting fee payment:', error);
      }
    );
  }
  printDetails(): void {
    window.print();
  }
}

