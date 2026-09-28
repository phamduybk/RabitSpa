import { StockDocStatus } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CounterService } from '../../common/tenant/counter.service';
export interface CheckItemInput {
    productId: string;
    actualQty: number;
}
export interface CreateCheckDto {
    branchId?: string;
    items: CheckItemInput[];
    note?: string;
}
export declare class StockCheckService {
    private readonly prisma;
    private readonly counter;
    constructor(prisma: PrismaService, counter: CounterService);
    list(tenantId: string, status?: StockDocStatus, branchIds?: string[]): Promise<{
        id: string;
        code: string;
        branchId: string;
        branch: string;
        status: import("@prisma/client").$Enums.StockDocStatus;
        note: string;
        createdByName: string;
        itemCount: number;
        diffQuantity: number;
        createdAt: Date;
        approvedAt: Date | null;
    }[]>;
    get(tenantId: string, id: string, branchIds?: string[]): Promise<{
        id: string;
        code: string;
        branchId: string;
        branch: string;
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
            systemQty: number;
            actualQty: number;
            diff: number;
        }[];
    }>;
    create(tenantId: string, userId: string, dto: CreateCheckDto, branchIds?: string[]): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.StockDocStatus;
        code: string;
    }>;
    approve(tenantId: string, userId: string, id: string, branchIds?: string[]): Promise<{
        adjustedLines: number;
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
    private resolveBranchId;
    private userName;
}
