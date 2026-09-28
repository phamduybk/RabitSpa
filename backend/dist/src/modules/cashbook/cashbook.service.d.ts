import { CashFlowType } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CounterService } from '../../common/tenant/counter.service';
import { CreateCashBookEntryDto, QueryCashBookDto } from './dto/cashbook.dto';
export interface CashBookRow {
    id: string;
    code: string;
    type: CashFlowType;
    amount: number;
    category: string;
    note: string | null;
    branchId: string | null;
    refInvoiceId: string | null;
    occurredAt: Date;
    createdAt: Date;
}
export interface CashBookSummary {
    totalThu: number;
    totalChi: number;
    net: number;
    balance: number;
    count: number;
}
export interface CashBookResult {
    summary: CashBookSummary;
    rows: CashBookRow[];
    pagination: {
        page: number;
        pageSize: number;
        total: number;
    };
}
export declare class CashbookService {
    private readonly prisma;
    private readonly counter;
    constructor(prisma: PrismaService, counter: CounterService);
    private buildWhere;
    list(tenantId: string, q: QueryCashBookDto): Promise<CashBookResult>;
    listAll(tenantId: string, q: QueryCashBookDto): Promise<CashBookRow[]>;
    create(tenantId: string, userId: string | undefined, dto: CreateCashBookEntryDto): Promise<CashBookRow>;
    remove(tenantId: string, id: string): Promise<{
        success: true;
    }>;
    private toRow;
}
