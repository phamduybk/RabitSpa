import { SuppliersService } from './suppliers.service';
declare class SupplierDto {
    name: string;
    phone?: string;
    address?: string;
    note?: string;
}
declare class ConsumptionDto {
    serviceId: string;
    productId: string;
    quantity: number;
}
export declare class SuppliersController {
    private readonly suppliers;
    constructor(suppliers: SuppliersService);
    list(t: string): import("@prisma/client").Prisma.PrismaPromise<{
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
    create(t: string, dto: SupplierDto): import("@prisma/client").Prisma.Prisma__SupplierClient<{
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
    update(t: string, id: string, dto: SupplierDto): Promise<{
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
    remove(t: string, id: string): Promise<{
        success: boolean;
    }>;
    listConsumption(t: string, serviceId: string): import("@prisma/client").Prisma.PrismaPromise<({
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
    setConsumption(t: string, dto: ConsumptionDto): Promise<{
        id: string;
        tenantId: string;
        productId: string;
        quantity: number;
        serviceId: string;
    }>;
    removeConsumption(t: string, id: string): Promise<{
        success: boolean;
    }>;
}
export {};
