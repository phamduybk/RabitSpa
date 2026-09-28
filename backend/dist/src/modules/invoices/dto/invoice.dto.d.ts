import { DiscountType, InvoiceItemType, InvoiceStatus, PaymentMethod } from '@prisma/client';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto';
export declare class InvoiceQueryDto extends PaginationQueryDto {
    from?: string;
    to?: string;
    status?: InvoiceStatus;
    branchId?: string;
    debt?: string;
}
export declare class InvoiceItemDto {
    itemType: InvoiceItemType;
    refId: string;
    quantity?: number;
    discount?: number;
    serverId?: string;
    sellerId?: string;
    consultantId?: string;
    referralSource?: string;
}
export declare class InitialPaymentDto {
    method: PaymentMethod;
    amount: number;
    cardId?: string;
}
export declare class CreateInvoiceDto {
    idempotencyKey?: string;
    customerId?: string;
    branchId?: string;
    appointmentId?: string;
    items: InvoiceItemDto[];
    discountType?: DiscountType;
    discountValue?: number;
    voucherCode?: string;
    note?: string;
    tipAmount?: number;
    initialPayment?: InitialPaymentDto;
}
export declare class AddPaymentDto {
    method: PaymentMethod;
    amount: number;
    cardId?: string;
}
export declare class RefundPaymentDto extends AddPaymentDto {
    reason?: string;
}
export declare class CancelInvoiceDto {
    reason: string;
}
export declare class InvoiceFeedbackDto {
    score: number;
    comment?: string;
}
