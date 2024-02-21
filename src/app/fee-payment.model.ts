//// fee-payment.model.ts
//export interface FeePaymentDetail {
//  feePaymentDetailId: number;
//  feePaymentId: number;
//  feeTypeName: string;
//  feeAmount: number;
//}

//export interface FeePayment {
//  feePaymentId: number;
//  studentId: number;
//  studentName: string;
//  totalFeeAmount: number;
//  discount: number;
//  amountAfterDiscount: number;
//  previousDue: number;
//  totalAmount: number;
//  amountPaid: number;
//  amountRemaining: number;
//  paymentDate: Date;
//  feePaymentDetails: FeePaymentDetail[];
//  feeStructures: FeeStructure[];
//}

//export interface FeeStructure {
//  feeStructureId: number;
//  feeTypeId: number;
//  standardId: number;
//  monthly: boolean;
//  yearly: boolean;
//  feeAmount: number;
//  feeType: FeeType; // Replace 'FeeType' with your actual model if available
//  standard: Standard; // Replace 'Standard' with your actual model if available
//}

//export interface FeeType {
//  feeTypeId: number;
//  feeTypeName: string;
//  // Add other properties as needed
//}

//export interface Standard {
//  standardId: number;
//  standardName: string;
//  // Add other properties as needed
//}
