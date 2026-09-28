import { AdminStatsService } from './admin-stats.service';
export declare class AdminStatsController {
    private readonly service;
    constructor(service: AdminStatsService);
    overview(): Promise<{
        totalTenants: number;
        newTenantsThisMonth: number;
        newTenantsLast30Days: number;
        tenantsByStatus: Record<string, number>;
        subscriptionsByPlan: {
            planCode: import("@prisma/client").$Enums.PlanCode | null;
            planName: string;
            count: number;
        }[];
        trialingCount: number;
        pastDueCount: number;
        trialExpiringSoonCount: number;
        revenue: {
            mrrEstimate: bigint;
            note: string;
        };
    }>;
}
