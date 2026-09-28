export declare class UpsertLoyaltyRuleDto {
    name?: string;
    active?: boolean;
    amountPerPoint: number;
    pointPerUnit: number;
    redeemPointValue: number;
    minRedeemPoint?: number;
    expiryDays?: number;
}
export declare class RedeemPointDto {
    points: number;
    note?: string;
}
export declare class AdjustPointDto {
    points: number;
    note?: string;
}
export declare class QueryLoyaltyDto {
    from?: string;
    to?: string;
    search?: string;
    format?: string;
    page?: number;
    pageSize?: number;
}
export declare class CreateRatingDto {
    score: number;
    operatorId?: string;
    invoiceId?: string;
    customerId?: string;
    comment?: string;
}
