import { AuthUser } from '../../common/auth/jwt-payload';
import { StockCheckService } from './stock-check.service';
declare class CheckItemDto {
    productId: string;
    actualQty: number;
}
declare class CreateCheckDto {
    branchId?: string;
    items: CheckItemDto[];
    note?: string;
}
export declare class StockCheckController {
    private readonly checks;
    constructor(checks: StockCheckService);
    list(t: string, user: AuthUser, status?: string): Promise<{
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
    get(t: string, user: AuthUser, id: string): Promise<{
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
    create(t: string, user: AuthUser, dto: CreateCheckDto): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.StockDocStatus;
        code: string;
    }>;
    approve(t: string, user: AuthUser, id: string): Promise<{
        adjustedLines: number;
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
