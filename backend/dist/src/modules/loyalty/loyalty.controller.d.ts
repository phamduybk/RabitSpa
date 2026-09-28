import type { Response } from 'express';
import { AuthUser } from '../../common/auth/jwt-payload';
import { ReportMetaService } from '../reports/report-export.util';
import { LoyaltyService } from './loyalty.service';
import { AdjustPointDto, CreateRatingDto, QueryLoyaltyDto, RedeemPointDto, UpsertLoyaltyRuleDto } from './dto/loyalty.dto';
export declare class LoyaltyController {
    private readonly loyalty;
    private readonly meta;
    constructor(loyalty: LoyaltyService, meta: ReportMetaService);
    private money;
    getRule(t: string): Promise<import("./loyalty.service").LoyaltyRuleView>;
    upsertRule(t: string, dto: UpsertLoyaltyRuleDto): Promise<import("./loyalty.service").LoyaltyRuleView>;
    ledger(t: string, id: string, q: QueryLoyaltyDto): Promise<{
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
    redeem(t: string, user: AuthUser, id: string, dto: RedeemPointDto): Promise<{
        points: number;
        moneyValue: number;
        balance: number;
    }>;
    adjust(t: string, user: AuthUser, id: string, dto: AdjustPointDto): Promise<{
        points: number;
        balance: number;
    }>;
    report(t: string, res: Response, q: QueryLoyaltyDto): Promise<void>;
    createRating(t: string, dto: CreateRatingDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        customerId: string | null;
        invoiceId: string | null;
        operatorId: string | null;
        score: number;
        comment: string | null;
    }>;
    listRatings(t: string, q: QueryLoyaltyDto): Promise<{
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
    ratingReport(t: string, res: Response, q: QueryLoyaltyDto): Promise<void>;
}
