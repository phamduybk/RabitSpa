import { SystemAuthUser } from '../../../common/auth/admin-jwt-payload';
import { AdminTenantsService } from './admin-tenants.service';
import { AdminTenantQueryDto } from '../dto/tenant-query.dto';
import { UpdateSubscriptionDto } from '../dto/update-subscription.dto';
import { TrialExpiringQueryDto } from '../dto/trial-expiring-query.dto';
export declare class AdminTenantsController {
    private readonly service;
    constructor(service: AdminTenantsService);
    list(query: AdminTenantQueryDto): Promise<import("../../../common/dto/pagination.dto").Paginated<any>>;
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
    lock(id: string, admin: SystemAuthUser): Promise<{
        id: string;
        name: string;
        status: import("@prisma/client").$Enums.TenantStatus;
    }>;
    unlock(id: string, admin: SystemAuthUser): Promise<{
        id: string;
        name: string;
        status: import("@prisma/client").$Enums.TenantStatus;
    }>;
    updateSubscription(id: string, dto: UpdateSubscriptionDto, admin: SystemAuthUser): Promise<{
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
}
