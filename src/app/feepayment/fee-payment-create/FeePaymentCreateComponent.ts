import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeeStructure } from '../../Models/FeeStructure';
import { FeePayment } from '../../Models/FeePayment';
import { FeePaymentService } from '../../Services/fee-payment.service';

@Component({
  selector: 'app-fee-payment-create',
  templateUrl: './fee-payment-create.component.html',
  styleUrls: ['./fee-payment-create.component.css']
})
export class FeePaymentCreateComponent implements OnInit {

  public feeStructuresList: FeeStructure[] = [];
  public model: FeePayment = new FeePayment();
  public selectedStandardId: number | null = null;
  public availableStandards: { id: number, name: string }[] = [];

  constructor(private feePaymentService: FeePaymentService, private router: Router) { }

  ngOnInit(): void {
    this.fetchFeeStructures();
    this.model = new FeePayment();
  }

  OnSubmit() {
    console.log('Submitting data:', this.model);

    this.feePaymentService.createFeePayment(this.model).subscribe({
      next: () => {
        this.router.navigate(['/fee-payments']);
      },
      error: (err) => { console.log(err); }
    });
  }

  fetchFeeStructures() {
    this.feePaymentService.getFeeStructures().subscribe(
      (data: FeeStructure[]) => {
        this.feeStructuresList = data;

        // Extract unique standardIds and standardNames
        const uniqueStandardsMap = new Map<number, string>();
        data.forEach(structure => {
          if (!uniqueStandardsMap.has(structure.standardId)) {
            uniqueStandardsMap.set(structure.standardId, structure.standardName);
          }
        });
        this.availableStandards = Array.from(uniqueStandardsMap.entries()).map(([id, name]) => ({ id, name }));
      },
      (error) => {
        console.error('Error fetching fee structures:', error);
      }
    );
  }

  // Add a method to filter fee structures based on selected standardId
  filterFeeStructures() {
    if (this.selectedStandardId === null) {
      // If standardId is null, include all fee structures
      this.model.feeStructures = this.feeStructuresList;
    } else {
      // Filter fee structures based on selected standardId
      this.model.feeStructures = this.feeStructuresList
        .filter(structure => structure.standardId === this.selectedStandardId);
    }
  }
}
