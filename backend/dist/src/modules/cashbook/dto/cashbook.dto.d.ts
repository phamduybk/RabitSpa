import { CashFlowType } from '@prisma/client';
export declare class CreateCashBookEntryDto {
    type: CashFlowType;
    amount: number;
    category: string;
    note?: string;
    branchId?: string;
    refInvoiceId?: string;
    occurredAt?: string;
}
export declare class QueryCashBookDto {
    from?: string;
    to?: string;
    type?: CashFlowType;
    branchId?: string;
    format?: string;
    page?: number;
    pageSize?: number;
}
