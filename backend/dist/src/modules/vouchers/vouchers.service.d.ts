import { DiscountType, Prisma } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
interface CreateVoucherDto {
    code: string;
    name: string;
    discountType: DiscountType;
    discountValue: number;
    maxDiscount?: number;
    minOrder?: number;
    totalQuantity?: number;
    expiresAt?: string;
}
export declare class VouchersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(tenantId: string): Prisma.PrismaPromise<{
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
    create(tenantId: string, dto: CreateVoucherDto): Promise<{
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
    remove(tenantId: string, id: string): Promise<{
        success: boolean;
    }>;
    validate(tenantId: string, code: string, orderTotal: number): Promise<{
        valid: boolean;
        voucherId: string;
        name: string;
        discount: number;
    }>;
    findUsable(tenantId: string, code: string): Promise<{
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
    claimUsage(tx: Prisma.TransactionClient, tenantId: string, id: string): Promise<{
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
    computeDiscount(voucher: {
        discountType: DiscountType;
        discountValue: bigint;
        maxDiscount: bigint;
        minOrder: bigint;
    }, orderTotal: bigint): bigint;
}
export {};
