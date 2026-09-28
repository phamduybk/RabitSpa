import { PrismaService } from '../../common/prisma/prisma.service';
export declare class SuppliersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(tenantId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        note: string | null;
    }[]>;
    create(tenantId: string, dto: {
        name: string;
        phone?: string;
        address?: string;
        note?: string;
    }): import("@prisma/client").Prisma.Prisma__SupplierClient<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        note: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(tenantId: string, id: string, dto: any): Promise<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        note: string | null;
    }>;
    remove(tenantId: string, id: string): Promise<{
        success: boolean;
    }>;
    listConsumption(tenantId: string, serviceId: string): import("@prisma/client").Prisma.PrismaPromise<({
        product: {
            id: string;
            name: string;
            unit: string | null;
        };
    } & {
        id: string;
        tenantId: string;
        productId: string;
        quantity: number;
        serviceId: string;
    })[]>;
    setConsumption(tenantId: string, serviceId: string, productId: string, quantity: number): Promise<{
        id: string;
        tenantId: string;
        productId: string;
        quantity: number;
        serviceId: string;
    }>;
    removeConsumption(tenantId: string, id: string): Promise<{
        success: boolean;
    }>;
    private ensure;
}
