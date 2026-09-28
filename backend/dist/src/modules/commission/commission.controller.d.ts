import { CommissionRole, CommissionScope, CommissionValueType } from '@prisma/client';
import { AuthUser } from '../../common/auth/jwt-payload';
import { CommissionService } from './commission.service';
declare class CreateRuleDto {
    role: CommissionRole;
    scope?: CommissionScope;
    refId?: string;
    valueType?: CommissionValueType;
    value: number;
}
export declare class CommissionController {
    private readonly commission;
    constructor(commission: CommissionService);
    listRules(t: string): import("@prisma/client").Prisma.PrismaPromise<{
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
    createRule(t: string, dto: CreateRuleDto): Promise<{
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
    removeRule(t: string, id: string): Promise<{
        success: boolean;
    }>;
    report(t: string, user: AuthUser, from: string, to: string): Promise<{
        operatorId: string;
        name: string;
        items: number;
        commission: number;
    }[]>;
}
export {};
