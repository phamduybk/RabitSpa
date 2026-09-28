import { LoyaltyTxnType, Prisma } from '@prisma/client';
export declare function recordLoyaltyLedger(tx: Prisma.TransactionClient, params: {
    tenantId: string;
    customerId: string;
    type: LoyaltyTxnType;
    points: number;
    balanceAfter: number;
    refInvoiceId?: string | null;
    moneyValue?: bigint | number;
    note?: string | null;
    createdById?: string | null;
}): Promise<void>;
