import { PrismaService } from '../../common/prisma/prisma.service';
import { CommissionService } from '../commission/commission.service';
export declare class SalaryService {
    private readonly prisma;
    private readonly commission;
    constructor(prisma: PrismaService, commission: CommissionService);
    listTimesheet(tenantId: string, from: string, to: string, branchIds?: string[]): import("@prisma/client").Prisma.PrismaPromise<({
        operator: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        note: string | null;
        operatorId: string;
        date: Date;
        checkIn: Date | null;
        checkOut: Date | null;
    })[]>;
    checkIn(tenantId: string, operatorId: string, dateStr?: string, branchIds?: string[]): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        note: string | null;
        operatorId: string;
        date: Date;
        checkIn: Date | null;
        checkOut: Date | null;
    }>;
    checkOut(tenantId: string, operatorId: string, dateStr?: string, branchIds?: string[]): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        note: string | null;
        operatorId: string;
        date: Date;
        checkIn: Date | null;
        checkOut: Date | null;
    }>;
    private ensureOperator;
    private workDate;
    payroll(tenantId: string, period: string, branchIds?: string[]): Promise<{
        operatorId: string;
        name: string;
        basicSalaryType: import("@prisma/client").$Enums.SalaryType;
        workedDays: number;
        workedHours: number;
        basic: number;
        commission: number;
        modes: {
            sum: number;
            basicOnly: number;
            commissionOnly: number;
            max: number;
        };
    }[]>;
}
