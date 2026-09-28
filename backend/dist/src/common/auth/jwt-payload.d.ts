import { RoleName } from '@prisma/client';
export interface JwtPayload {
    sub: string;
    tenantId: string;
    email: string;
    roles: RoleName[];
    branchIds: string[];
}
export interface AuthUser {
    userId: string;
    tenantId: string;
    email: string;
    roles: RoleName[];
    branchIds: string[];
}
