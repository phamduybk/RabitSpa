import { CommissionRole, CommissionScope, CommissionValueType } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
interface CreateRuleDto {
    role: CommissionRole;
    scope?: CommissionScope;
    refId?: string;
    valueType?: CommissionValueType;
    value: number;
}
export declare class CommissionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listRules(tenantId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        role: import("@prisma/client").$Enums.CommissionRole;
        scope: import("@prisma/client").$Enums.CommissionScope;
        refId: string | null;
        valueType: import("@prisma/client").$Enums.CommissionValueType;
        value: bigint;
    }[]>;
    createRule(tenantId: string, dto: CreateRuleDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        role: import("@prisma/client").$Enums.CommissionRole;
        scope: import("@prisma/client").$Enums.CommissionScope;
        refId: string | null;
        valueType: import("@prisma/client").$Enums.CommissionValueType;
        value: bigint;
    }>;
    removeRule(tenantId: string, id: string): Promise<{
        success: boolean;
    }>;
    report(tenantId: string, from: string, to: string, branchIds?: string[]): Promise<{
        operatorId: string;
        name: string;
        items: number;
        commission: number;
    }[]>;
    private matchRule;
}
export {};
