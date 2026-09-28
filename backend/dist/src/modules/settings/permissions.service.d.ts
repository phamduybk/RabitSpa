import { RoleName } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
export declare const PERMISSION_MODULES: readonly ["appointments", "pos", "customers", "reports", "inventory", "marketing", "surveys", "staff", "settings", "permissions"];
export type PermissionModule = (typeof PERMISSION_MODULES)[number];
type RoleMatrix = Record<string, Record<string, boolean>>;
export declare class PermissionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private allTrue;
    private loadMatrix;
    getMatrix(tenantId: string): Promise<{
        modules: readonly ["appointments", "pos", "customers", "reports", "inventory", "marketing", "surveys", "staff", "settings", "permissions"];
        roles: import("@prisma/client").$Enums.RoleName[];
        ownerRole: "OWNER";
        matrix: {
            OWNER: Record<string, boolean>;
        };
    }>;
    updateMatrix(tenantId: string, dto: {
        matrix?: RoleMatrix;
    }): Promise<{
        modules: readonly ["appointments", "pos", "customers", "reports", "inventory", "marketing", "surveys", "staff", "settings", "permissions"];
        roles: import("@prisma/client").$Enums.RoleName[];
        ownerRole: "OWNER";
        matrix: {
            OWNER: Record<string, boolean>;
        };
    }>;
    myPermissions(tenantId: string, roles: RoleName[]): Promise<{
        isOwner: boolean;
        modules: ("customers" | "appointments" | "settings" | "surveys" | "inventory" | "pos" | "reports" | "marketing" | "staff" | "permissions")[];
    }>;
}
export {};
