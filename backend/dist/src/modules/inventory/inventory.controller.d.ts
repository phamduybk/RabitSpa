import { AuthUser } from '../../common/auth/jwt-payload';
import { InventoryService } from './inventory.service';
declare class MoveDto {
    productId: string;
    branchId?: string;
    quantity: number;
    costPrice?: number;
    note?: string;
}
declare class AdjustDto {
    productId: string;
    branchId?: string;
    targetQuantity: number;
    note?: string;
}
declare class TransferDto {
    productId: string;
    fromBranchId: string;
    toBranchId: string;
    quantity: number;
    note?: string;
}
export declare class InventoryController {
    private readonly inventory;
    constructor(inventory: InventoryService);
    list(t: string, user: AuthUser, q?: string, branchId?: string): Promise<{
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
    importStock(t: string, user: AuthUser, dto: MoveDto): Promise<{
        id: string;
        updatedAt: Date;
        tenantId: string;
        branchId: string;
        productId: string;
        quantity: number;
    }>;
    exportStock(t: string, user: AuthUser, dto: MoveDto): Promise<{
        id: string;
        updatedAt: Date;
        tenantId: string;
        branchId: string;
        productId: string;
        quantity: number;
    }>;
    adjust(t: string, user: AuthUser, dto: AdjustDto): Promise<{
        id: string;
        updatedAt: Date;
        tenantId: string;
        branchId: string;
        productId: string;
        quantity: number;
    }>;
    transfer(t: string, user: AuthUser, dto: TransferDto): Promise<{
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
    history(t: string, user: AuthUser, productId: string, branchId?: string): Promise<{
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
}
export {};
