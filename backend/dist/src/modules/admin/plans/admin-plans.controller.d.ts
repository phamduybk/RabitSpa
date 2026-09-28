import { AdminPlansService } from './admin-plans.service';
import { CreatePlanDto, UpdatePlanDto } from '../dto/plan.dto';
export declare class AdminPlansController {
    private readonly service;
    constructor(service: AdminPlansService);
    list(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        code: import("@prisma/client").$Enums.PlanCode;
        priceMonthly: bigint;
        priceYearly: bigint;
        maxBranches: number | null;
        maxStaff: number | null;
        maxAccounts: number | null;
        maxCatalogItems: number | null;
        maxInvoicesPerMonth: number | null;
        sortOrder: number;
    }[]>;
    detail(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        code: import("@prisma/client").$Enums.PlanCode;
        priceMonthly: bigint;
        priceYearly: bigint;
        maxBranches: number | null;
        maxStaff: number | null;
        maxAccounts: number | null;
        maxCatalogItems: number | null;
        maxInvoicesPerMonth: number | null;
        sortOrder: number;
    }>;
    create(dto: CreatePlanDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        code: import("@prisma/client").$Enums.PlanCode;
        priceMonthly: bigint;
        priceYearly: bigint;
        maxBranches: number | null;
        maxStaff: number | null;
        maxAccounts: number | null;
        maxCatalogItems: number | null;
        maxInvoicesPerMonth: number | null;
        sortOrder: number;
    }>;
    update(id: string, dto: UpdatePlanDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        code: import("@prisma/client").$Enums.PlanCode;
        priceMonthly: bigint;
        priceYearly: bigint;
        maxBranches: number | null;
        maxStaff: number | null;
        maxAccounts: number | null;
        maxCatalogItems: number | null;
        maxInvoicesPerMonth: number | null;
        sortOrder: number;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
