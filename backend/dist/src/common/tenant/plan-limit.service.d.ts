import { PrismaService } from '../prisma/prisma.service';
type LimitKey = 'maxStaff' | 'maxAccounts' | 'maxCatalogItems' | 'maxInvoicesPerMonth';
export declare class PlanLimitService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    assertCanCreate(tenantId: string, key: LimitKey, current: number, label: string): Promise<void>;
}
export {};
