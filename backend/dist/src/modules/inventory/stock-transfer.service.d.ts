import { StockDocStatus } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CounterService } from '../../common/tenant/counter.service';
export interface TransferItemInput {
    productId: string;
    quantity: number;
}
export interface CreateTransferDto {
    fromBranchId: string;
    toBranchId: string;
    items: TransferItemInput[];
    note?: string;
}
export declare class StockTransferService {
    private readonly prisma;
    private readonly counter;
    constructor(prisma: PrismaService, counter: CounterService);
    list(tenantId: string, status?: StockDocStatus, branchIds?: string[]): Promise<{
        id: string;
        code: string;
        fromBranchId: string;
        toBranchId: string;
        fromBranch: string;
        toBranch: string;
        status: import("@prisma/client").$Enums.StockDocStatus;
        note: string;
        createdByName: string;
        itemCount: number;
        totalQuantity: number;
        createdAt: Date;
        approvedAt: Date | null;
    }[]>;
    get(tenantId: string, id: string, branchIds?: string[]): Promise<{
        id: string;
        code: string;
        fromBranchId: string;
        toBranchId: string;
        fromBranch: string;
        toBranch: string;
        status: import("@prisma/client").$Enums.StockDocStatus;
        note: string;
        createdByName: string;
        createdAt: Date;
        approvedAt: Date | null;
        items: {
            productId: string;
            product: string;
            sku: string | null;
            unit: string | null;
            quantity: number;
        }[];
    }>;
    create(tenantId: string, userId: string, dto: CreateTransferDto, branchIds?: string[]): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.StockDocStatus;
        code: string;
    }>;
    approve(tenantId: string, userId: string, id: string, branchIds?: string[]): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.StockDocStatus;
        code: string;
        approvedAt: Date | null;
    }>;
    cancel(tenantId: string, id: string, branchIds?: string[]): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.StockDocStatus;
    }>;
    private normalizeItems;
    private assertProducts;
    private assertBranch;
    private userName;
}
