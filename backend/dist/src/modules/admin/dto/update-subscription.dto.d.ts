import { PlanCode, SubscriptionStatus } from '@prisma/client';
export declare class UpdateSubscriptionDto {
    planCode?: PlanCode;
    status?: SubscriptionStatus;
    extendDays?: number;
}
