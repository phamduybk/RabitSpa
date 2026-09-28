import { PrismaService } from '../../../common/prisma/prisma.service';
export declare class AdminStatsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
