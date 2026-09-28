import { PrismaService } from '../../common/prisma/prisma.service';
interface MoveDto {
    productId: string;
    branchId?: string;
    quantity: number;
    costPrice?: number;
    note?: string;
}
interface TransferDto {
    productId: string;
    fromBranchId: string;
    toBranchId: string;
    quantity: number;
    note?: string;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(tenantId: string, q?: string, branchIds?: string[]): Promise<{
        id: string;
        name: string;
        sku: string | null;
        unit: string | null;
        category: string | null;
        quantity: number;
        costPrice: number;
        price: number;
        stockValueCost: number;
        stockValueSale: number;
    }[]>;
    importStock(tenantId: string, dto: MoveDto, branchIds?: string[]): Promise<{
        id: string;
        updatedAt: Date;
        tenantId: string;
        branchId: string;
        productId: string;
        quantity: number;
    }>;
    exportStock(tenantId: string, dto: MoveDto, branchIds?: string[]): Promise<{
        id: string;
        updatedAt: Date;
        tenantId: string;
        branchId: string;
        productId: string;
        quantity: number;
    }>;
    adjust(tenantId: string, dto: MoveDto & {
        targetQuantity: number;
    }, branchIds?: string[]): Promise<{
        id: string;
        updatedAt: Date;
        tenantId: string;
        branchId: string;
        productId: string;
        quantity: number;
    }>;
    transfer(tenantId: string, dto: TransferDto, branchIds?: string[]): Promise<{
        transferRef: string;
        product: string;
        quantity: number;
        from: {
            id: string;
            name: string;
            remaining: number;
        };
        to: {
            id: string;
            name: string;
            quantity: number;
        };
    }>;
    history(tenantId: string, productId: string, branchIds?: string[]): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        costPrice: bigint;
        note: string | null;
        branchId: string;
        productId: string;
        quantity: number;
        type: import("@prisma/client").$Enums.StockMovementType;
        operatorId: string | null;
        batchId: string | null;
    }[]>;
    private move;
    private defaultBranchId;
    private resolveBranchId;
}
export {};
