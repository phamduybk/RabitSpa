import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class CounterService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    next(tx: Prisma.TransactionClient, tenantId: string, key: string): Promise<number>;
    format(prefix: string, value: number, width?: number): string;
}
