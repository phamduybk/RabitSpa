import { PlanCode } from '@prisma/client';
export declare class CreatePlanDto {
    code: PlanCode;
    name: string;
    priceMonthly: number;
    priceYearly: number;
    maxBranches?: number;
    maxStaff?: number;
    maxAccounts?: number;
    maxCatalogItems?: number;
    maxInvoicesPerMonth?: number;
    sortOrder?: number;
}
export declare class UpdatePlanDto {
    name?: string;
    priceMonthly?: number;
    priceYearly?: number;
    maxBranches?: number;
    maxStaff?: number;
    maxAccounts?: number;
    maxCatalogItems?: number;
    maxInvoicesPerMonth?: number;
    sortOrder?: number;
}
