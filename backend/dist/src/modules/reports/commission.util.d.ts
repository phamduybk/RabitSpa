import { CommissionRole, CommissionScope, CommissionValueType, InvoiceItemType } from '@prisma/client';
export interface RuleLite {
    role: CommissionRole;
    scope: CommissionScope;
    refId: string | null;
    valueType: CommissionValueType;
    value: number;
    isActive: boolean;
}
export declare function pickRule(rules: RuleLite[], role: CommissionRole, itemType: InvoiceItemType, refId: string | null): RuleLite | null;
export declare function commissionForBase(rule: RuleLite | null, base: number): number;
export declare function rateLabel(rule: RuleLite | null): string;
