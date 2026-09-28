import { PrismaService } from '../../common/prisma/prisma.service';
export declare class TenantsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    resolve(subdomain: string): Promise<{
        name: string;
        subdomain: string;
        businessType: import("@prisma/client").$Enums.BusinessType;
        status: import("@prisma/client").$Enums.TenantStatus;
        logoUrl: string | null;
    }>;
}
