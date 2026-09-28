import { CardTxnType, CardType } from '@prisma/client';
export declare class CreateCardTemplateDto {
    type: CardType;
    name: string;
    price: number;
    faceValue?: number;
    bonusValue?: number;
    serviceId?: string;
    totalSessions?: number;
    validityDays?: number;
}
export declare class IssueCardDto {
    customerId: string;
    templateId: string;
}
export declare class RedeemCardDto {
    value?: number;
    sessions?: number;
    note?: string;
    invoiceId?: string;
}
export declare class ExtendCardDto {
    days: number;
    note?: string;
}
export declare class SetCardFrozenDto {
    frozen: boolean;
    note?: string;
}
export declare class AdjustCardDto {
    type: CardTxnType;
    valueDelta?: number;
    sessionDelta?: number;
    note: string;
}
