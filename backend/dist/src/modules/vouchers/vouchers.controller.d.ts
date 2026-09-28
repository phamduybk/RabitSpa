import { DiscountType } from '@prisma/client';
import { VouchersService } from './vouchers.service';
declare class CreateVoucherDto {
    code: string;
    name: string;
    discountType: DiscountType;
    discountValue: number;
    maxDiscount?: number;
    minOrder?: number;
    totalQuantity?: number;
    expiresAt?: string;
}
declare class ValidateVoucherQueryDto {
    code: string;
    orderTotal: number;
}
export declare class VouchersController {
    private readonly vouchers;
    constructor(vouchers: VouchersService);
    list(t: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        isActive: boolean;
        discountType: import("@prisma/client").$Enums.DiscountType;
        discountValue: bigint;
        maxDiscount: bigint;
        minOrder: bigint;
        totalQuantity: number | null;
        usedCount: number;
        expiresAt: Date | null;
    }[]>;
    create(t: string, dto: CreateVoucherDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        isActive: boolean;
        discountType: import("@prisma/client").$Enums.DiscountType;
        discountValue: bigint;
        maxDiscount: bigint;
        minOrder: bigint;
        totalQuantity: number | null;
        usedCount: number;
        expiresAt: Date | null;
    }>;
    validate(t: string, query: ValidateVoucherQueryDto): Promise<{
        valid: boolean;
        voucherId: string;
        name: string;
        discount: number;
    }>;
    remove(t: string, id: string): Promise<{
        success: boolean;
    }>;
}
export {};
