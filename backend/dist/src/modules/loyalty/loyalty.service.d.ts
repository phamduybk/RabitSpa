import { PrismaService } from '../../common/prisma/prisma.service';
import { AdjustPointDto, CreateRatingDto, QueryLoyaltyDto, RedeemPointDto, UpsertLoyaltyRuleDto } from './dto/loyalty.dto';
export interface LoyaltyRuleView {
    id: string;
    name: string;
    active: boolean;
    amountPerPoint: number;
    pointPerUnit: number;
    redeemPointValue: number;
    minRedeemPoint: number;
    expiryDays: number | null;
}
export declare class LoyaltyService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toRuleView;
    getRule(tenantId: string): Promise<LoyaltyRuleView>;
    upsertRule(tenantId: string, dto: UpsertLoyaltyRuleDto): Promise<LoyaltyRuleView>;
    customerLedger(tenantId: string, customerId: string, page?: number, pageSize?: number): Promise<{
        customer: {
            id: string;
            fullName: string;
            loyaltyPoint: number;
            rank: string;
        };
        summary: {
            earned: number;
            redeemed: number;
            balance: number;
        };
        rows: {
            id: string;
            type: import("@prisma/client").$Enums.LoyaltyTxnType;
            points: number;
            balanceAfter: number;
            moneyValue: number;
            refInvoiceId: string | null;
            note: string | null;
            createdAt: Date;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
    }>;
    redeem(tenantId: string, customerId: string, dto: RedeemPointDto, userId?: string): Promise<{
        points: number;
        moneyValue: number;
        balance: number;
    }>;
    adjust(tenantId: string, customerId: string, dto: AdjustPointDto, userId?: string): Promise<{
        points: number;
        balance: number;
    }>;
    private dateRange;
    report(tenantId: string, q: QueryLoyaltyDto): Promise<{
        kpis: {
            totalEarned: number;
            totalRedeemed: number;
            totalAdjusted: number;
            totalRedeemMoney: number;
            customerCount: number;
        };
        chart: never[];
        rows: {
            name: string;
            mobile: string;
            earned: number;
            redeemed: number;
            adjusted: number;
            redeemMoney: number;
            balance: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
    }>;
    reportAll(tenantId: string, q: QueryLoyaltyDto): Promise<{
        rows: {
            name: string;
            mobile: string;
            earned: number;
            redeemed: number;
            adjusted: number;
            redeemMoney: number;
            balance: number;
        }[];
        kpis: {
            totalEarned: number;
            totalRedeemed: number;
            totalAdjusted: number;
            totalRedeemMoney: number;
            customerCount: number;
        };
    }>;
    createRating(tenantId: string, dto: CreateRatingDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        customerId: string | null;
        invoiceId: string | null;
        operatorId: string | null;
        score: number;
        comment: string | null;
    }>;
    listRatings(tenantId: string, q: QueryLoyaltyDto): Promise<{
        rows: {
            id: string;
            score: number;
            comment: string | null;
            operatorName: string;
            customerName: string;
            createdAt: Date;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
    }>;
    operatorReport(tenantId: string, q: QueryLoyaltyDto): Promise<{
        kpis: {
            totalRatings: number;
            overallAvg: number;
            operatorCount: number;
        };
        chart: never[];
        rows: {
            operatorId: string;
            name: string;
            ratingCount: number;
            avgScore: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
    }>;
    operatorReportAll(tenantId: string, q: QueryLoyaltyDto): Promise<{
        rows: {
            operatorId: string;
            name: string;
            ratingCount: number;
            avgScore: number;
        }[];
        kpis: {
            totalRatings: number;
            overallAvg: number;
            operatorCount: number;
        };
    }>;
}
