import { PrismaService } from '../../common/prisma/prisma.service';
export declare class SubscriptionController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    current(tenantId: string): Promise<{
        plan: import("@prisma/client").$Enums.PlanCode | undefined;
        planName: string | undefined;
        status: import("@prisma/client").$Enums.SubscriptionStatus | undefined;
        endsAt: Date | undefined;
        daysLeft: number;
        usage: {
            staff: {
                used: number;
                limit: number | null;
            };
            accounts: {
                used: number;
                limit: number | null;
            };
            catalog: {
                used: number;
                limit: number | null;
            };
            invoicesThisMonth: {
                used: number;
                limit: number | null;
            };
        };
    }>;
}
