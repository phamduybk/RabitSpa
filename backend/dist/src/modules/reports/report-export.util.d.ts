import { PrismaService } from '../../common/prisma/prisma.service';
import { ExcelColumn } from './excel.util';
export declare const BRAND_NAME = "Rabit Spa";
export declare function formatDateRange(from?: string, to?: string): string;
export declare function buildTotalRow(rows: Record<string, unknown>[], columns: ExcelColumn[]): Record<string, unknown>;
export declare function flattenKpis(kpis: Record<string, unknown>, prefix?: string): {
    label: string;
    value: string | number;
}[];
export declare class ReportMetaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    metaLines(tenantId: string, branchIds: string[] | undefined, opts?: {
        from?: string;
        to?: string;
        timeLabel?: string;
        extra?: string[];
    }): Promise<string[]>;
}
