import { AuthUser } from '../../common/auth/jwt-payload';
import { StockTransferService } from './stock-transfer.service';
declare class TransferItemDto {
    productId: string;
    quantity: number;
}
declare class CreateTransferDto {
    fromBranchId: string;
    toBranchId: string;
    items: TransferItemDto[];
    note?: string;
}
export declare class StockTransferController {
    private readonly transfers;
    constructor(transfers: StockTransferService);
    list(t: string, user: AuthUser, status?: string): Promise<{
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
    get(t: string, user: AuthUser, id: string): Promise<{
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
    create(t: string, user: AuthUser, dto: CreateTransferDto): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.StockDocStatus;
        code: string;
    }>;
    approve(t: string, user: AuthUser, id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.StockDocStatus;
        code: string;
        approvedAt: Date | null;
    }>;
    cancel(t: string, user: AuthUser, id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.StockDocStatus;
    }>;
    private scope;
}
export {};
