import { RoleName } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { PlanLimitService } from '../../common/tenant/plan-limit.service';
export declare class OrgService {
    private readonly prisma;
    private readonly limits;
    constructor(prisma: PrismaService, limits: PlanLimitService);
    listBranches(tenantId: string, branchIds?: string[]): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        isDefault: boolean;
    }[]>;
    createBranch(tenantId: string, dto: {
        name: string;
        address?: string;
        phone?: string;
    }): import("@prisma/client").Prisma.Prisma__BranchClient<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        isDefault: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateBranch(tenantId: string, id: string, dto: {
        name?: string;
        address?: string;
        phone?: string;
        isDefault?: boolean;
    }): Promise<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        isDefault: boolean;
    }>;
    removeBranch(tenantId: string, id: string): Promise<{
        success: boolean;
    }>;
    private ensureBranch;
    listUsers(tenantId: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        roles: import("@prisma/client").$Enums.RoleName[];
        branchIds: string[];
    }[]>;
    createUser(tenantId: string, dto: {
        name: string;
        email: string;
        password: string;
        phone?: string;
        role: RoleName;
        branchIds?: string[];
        operatorId?: string;
    }, actorRoles?: RoleName[]): Promise<{
        id: string;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.RoleName;
        branchIds: string[];
        operatorId: string | null;
    }>;
    updateUserAccess(tenantId: string, id: string, dto: {
        role: RoleName;
        branchIds: string[];
    }, actorRoles: RoleName[]): Promise<{
        id: string;
        role: import("@prisma/client").$Enums.RoleName;
        branchIds: string[];
    }>;
    setUserActive(tenantId: string, id: string, isActive: boolean, currentUserId?: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        deletedAt: Date | null;
        email: string;
        passwordHash: string | null;
        googleId: string | null;
        tokenVersion: number;
    }>;
}
