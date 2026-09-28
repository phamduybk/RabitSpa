import { AuthUser } from '../../common/auth/jwt-payload';
import { SalaryService } from './salary.service';
declare class CheckDto {
    operatorId: string;
    date?: string;
}
export declare class SalaryController {
    private readonly salary;
    constructor(salary: SalaryService);
    timesheet(t: string, user: AuthUser, from: string, to: string, branchId?: string): import("@prisma/client").Prisma.PrismaPromise<({
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
    checkIn(t: string, user: AuthUser, dto: CheckDto): Promise<{
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
    checkOut(t: string, user: AuthUser, dto: CheckDto): Promise<{
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
    payroll(t: string, user: AuthUser, period: string): Promise<{
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
    private scope;
}
export {};
