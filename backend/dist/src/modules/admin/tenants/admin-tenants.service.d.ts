import { PrismaService } from '../../../common/prisma/prisma.service';
import { Paginated } from '../../../common/dto/pagination.dto';
import { AdminTenantQueryDto } from '../dto/tenant-query.dto';
import { UpdateSubscriptionDto } from '../dto/update-subscription.dto';
import { TrialExpiringQueryDto } from '../dto/trial-expiring-query.dto';
import { AdminAuditLogsService } from '../audit-logs/admin-audit-logs.service';
export declare class AdminTenantsService {
    private readonly prisma;
    private readonly auditLogs;
    constructor(prisma: PrismaService, auditLogs: AdminAuditLogsService);
    list(query: AdminTenantQueryDto): Promise<Paginated<any>>;
    detail(id: string): Promise<{
        owner: {
            id: string;
            name: string;
            phone: string | null;
            isActive: boolean;
            email: string;
        } | null;
        stats: {
            branches: number;
            users: number;
            operators: number;
            customers: number;
            invoicesTotal: number;
            invoicesThisMonth: number;
        };
        subscription: ({
            plan: {
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
            };
        } & {
            id: string;
            status: import("@prisma/client").$Enums.SubscriptionStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            planId: string;
            billingCycle: import("@prisma/client").$Enums.BillingCycle;
            startsAt: Date;
            endsAt: Date;
        }) | null;
        id: string;
        name: string;
        subdomain: string;
        businessType: import("@prisma/client").$Enums.BusinessType;
        phone: string | null;
        address: string | null;
        province: string | null;
        district: string | null;
        country: string;
        referralCode: string | null;
        status: import("@prisma/client").$Enums.TenantStatus;
        timezone: string;
        logoUrl: string | null;
        customDomain: string | null;
        cfTunnelId: string | null;
        cfDnsRecordId: string | null;
        localPort: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    trialExpiring(query: TrialExpiringQueryDto): Promise<{
        tenant: {
            id: string;
            name: string;
            subdomain: string;
            phone: string | null;
            status: import("@prisma/client").$Enums.TenantStatus;
            createdAt: Date;
        };
        planCode: import("@prisma/client").$Enums.PlanCode;
        planName: string;
        endsAt: Date;
        daysLeft: number;
    }[]>;
    lock(id: string, actorId: string): Promise<{
        id: string;
        name: string;
        status: import("@prisma/client").$Enums.TenantStatus;
    }>;
    unlock(id: string, actorId: string): Promise<{
        id: string;
        name: string;
        status: import("@prisma/client").$Enums.TenantStatus;
    }>;
    updateSubscription(id: string, dto: UpdateSubscriptionDto, actorId: string): Promise<{
        plan: {
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
        };
    } & {
        id: string;
        status: import("@prisma/client").$Enums.SubscriptionStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        planId: string;
        billingCycle: import("@prisma/client").$Enums.BillingCycle;
        startsAt: Date;
        endsAt: Date;
    }>;
    private ensureExists;
}
