import type { Response } from 'express';
import { AuthUser } from '../../common/auth/jwt-payload';
import { ReportsService } from './reports.service';
import { CreateExpenseDto } from './dto/expense.dto';
import { CommissionPreviewDto } from './dto/commission-preview.dto';
import { ReportMetaService } from './report-export.util';
export declare class ReportsController {
    private readonly reports;
    private readonly meta;
    constructor(reports: ReportsService, meta: ReportMetaService);
    dashboard(t: string, user: AuthUser, date?: string): Promise<{
        date: string;
        revenue: number;
        invoiceCount: number;
        newCustomers: number;
        appointmentsByStatus: {
            status: import("@prisma/client").$Enums.AppointmentStatus;
            count: number;
        }[];
        permissions: {
            finance: boolean;
            inventory: boolean;
            customerCare: boolean;
        };
        tasks: {
            unconfirmedAppointments: number;
            unremindedAppointments: number;
            debtInvoices: number;
            debtAmount: number;
            lowStockProducts: number;
            birthdaysToday: number;
        };
    }>;
    revenue(t: string, user: AuthUser, from?: string, to?: string, groupBy?: 'day' | 'payment_method', branchId?: string): Promise<{
        key: string;
        total: number;
    }[]>;
    summary(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    daily(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    staff(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    cashiers(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    customers(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    commissionReport(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    commissionPreview(t: string, dto: CommissionPreviewDto): Promise<{
        lines: {
            index: number;
            byRole: {
                SERVER: number;
                SELLER: number;
                CONSULTANT: number;
            };
        }[];
        total: number;
    }>;
    customerDebt(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    cashflow(t: string, user: AuthUser, from: string, to: string, branchId?: string): Promise<{
        income: number;
        refund: number;
        expense: number;
        net: number;
        invoiceCount: number;
        entries: {
            id: string;
            type: string;
            category: string;
            amount: number;
            note: string | null;
            occurredAt: Date;
        }[];
    }>;
    expenses(t: string, user: AuthUser, from: string, to: string, branchId?: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        category: string;
        note: string | null;
        branchId: string | null;
        amount: bigint;
        occurredAt: Date;
    }[]>;
    debt(t: string, user: AuthUser, branchId?: string): Promise<{
        total: number;
        count: number;
        invoices: {
            id: string;
            createdAt: Date;
            code: string;
            customer: {
                id: string;
                fullName: string;
                mobile: string;
            } | null;
            debtAmount: bigint;
            total: bigint;
            paidAmount: bigint;
        }[];
    }>;
    serviceQuality(t: string, user: AuthUser, from: string, to: string, branchId?: string): Promise<{
        tipTotal: number;
        ratingCount: number;
        averageScore: number;
        distribution: {
            score: number;
            count: number;
        }[];
        feedback: {
            id?: string | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            invoiceId: string;
            score?: number | undefined;
            comment?: string | null | undefined;
            code: string;
            customerName: string;
        }[];
    }>;
    createExpense(t: string, user: AuthUser, dto: CreateExpenseDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        category: string;
        note: string | null;
        branchId: string | null;
        amount: bigint;
        occurredAt: Date;
    }>;
    deleteExpense(t: string, user: AuthUser, id: string): Promise<{
        deleted: boolean;
    }>;
    private num;
    private respond;
    private scope;
}
