import { PrismaService } from '../../common/prisma/prisma.service';
export declare class CardReportsService {
    private readonly prisma;
    private readonly TYPE_LABEL;
    constructor(prisma: PrismaService);
    cardUsage(tenantId: string, from?: string, to?: string, status?: 'active' | 'expired', search?: string, page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            cardCount: number;
            customerCount: number;
            totalRemainingValue: number;
            totalRemainingSessions: number;
            usageCount: number;
            usedValue: number;
            expiredCount: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            customer: string;
            mobile: string;
            cardCode: string;
            template: string;
            typeLabel: string;
            remainingValue: number;
            remainingSessions: number;
            expiresAt: Date;
            lastUsedAt: Date | null;
            usageCount: number;
            usedValue: number;
            usedSessions: number;
            status: string;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            customer: string;
            mobile: string;
            cardCode: string;
            template: string;
            typeLabel: string;
            remainingValue: number;
            remainingSessions: number;
            expiresAt: Date;
            lastUsedAt: Date | null;
            usageCount: number;
            usedValue: number;
            usedSessions: number;
            status: string;
        }[];
    }>;
    cardUsageLog(tenantId: string, from?: string, to?: string, search?: string): Promise<{
        rows: Record<string, unknown>[];
    }>;
    private resolveRange;
    private paginate;
    private localDateKey;
}
