import { CommissionRole } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateExpenseDto } from './dto/expense.dto';
import { CommissionPreviewDto } from './dto/commission-preview.dto';
export type Granularity = 'day' | 'week' | 'month' | 'quarter';
export interface Paginated<T> {
    kpis: Record<string, unknown>;
    chart: {
        label: string;
        value: number;
    }[];
    rows: T[];
    pagination: {
        page: number;
        pageSize: number;
        total: number;
    };
}
export declare class ReportsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private range;
    dashboard(tenantId: string, dateStr?: string, branchIds?: string[], permissions?: {
        finance: boolean;
        inventory: boolean;
        customerCare: boolean;
    }): Promise<{
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
    revenue(tenantId: string, from: string | undefined, to: string | undefined, groupBy?: 'day' | 'payment_method', branchIds?: string[]): Promise<{
        key: string;
        total: number;
    }[]>;
    expenses(tenantId: string, from: string, to: string, branchIds?: string[]): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        category: string;
        note: string | null;
        branchId: string | null;
        amount: bigint;
        occurredAt: Date;
    }[]>;
    createExpense(tenantId: string, dto: CreateExpenseDto, branchIds?: string[]): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        category: string;
        note: string | null;
        branchId: string | null;
        amount: bigint;
        occurredAt: Date;
    }>;
    debt(tenantId: string, branchIds?: string[]): Promise<{
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
    serviceQuality(tenantId: string, from: string, to: string, branchIds?: string[]): Promise<{
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
    deleteExpense(tenantId: string, id: string, branchIds?: string[]): Promise<{
        deleted: boolean;
    }>;
    cashflow(tenantId: string, from: string, to: string, branchIds?: string[]): Promise<{
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
    private resolveRange;
    private isoWeek;
    private bucketOf;
    private paginate;
    private invRevenueWhere;
    private payWhere;
    private operatorNames;
    private loadRules;
    private lineBase;
    summary(tenantId: string, from?: string, to?: string, groupBy?: 'day' | 'branch', branchIds?: string[], page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            invoiceCount: number;
            totalCollected: number;
            totalSubtotal: number;
            totalDebt: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            key: string;
            invoiceCount: number;
            cash: number;
            card: number;
            bankTransfer: number;
            memberCard: number;
            total: number;
            itemQty: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            key: string;
            invoiceCount: number;
            cash: number;
            card: number;
            bankTransfer: number;
            memberCard: number;
            total: number;
            itemQty: number;
        }[];
    }>;
    daily(tenantId: string, from?: string, to?: string, granularity?: Granularity, branchIds?: string[], page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            collectedTotal: {
                newSale: number;
                debtCollected: number;
                orderCount: number;
            };
            byMethod: {
                cash: {
                    newSale: number;
                    debt: number;
                };
                card: {
                    newSale: number;
                    debt: number;
                };
                bankTransfer: {
                    newSale: number;
                    debt: number;
                };
            };
            debt: {
                newUnpaid: number;
                debtCollected: number;
                totalOutstanding: number;
            };
            cardDeduct: number;
            voucher: {
                amount: number;
                count: number;
            };
            tip: number;
            vat: number;
            expense: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            time: string;
            newOrders: number;
            newOrderValue: number;
            collectedNew: number;
            collectedOldDebt: number;
            collectedTotal: number;
            newDebt: number;
            cardDeduct: number;
            newOrderGross: number;
            newOrderNet: number;
            saleCash: number;
            saleCard: number;
            saleBank: number;
            saleWallet: number;
            debtCash: number;
            debtCard: number;
            debtBank: number;
            debtWallet: number;
            totalCash: number;
            totalCardBank: number;
            totalWallet: number;
            debtInPeriod: number;
            debtPrevPeriod: number;
            vat: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            time: string;
            newOrders: number;
            newOrderValue: number;
            collectedNew: number;
            collectedOldDebt: number;
            collectedTotal: number;
            newDebt: number;
            cardDeduct: number;
            newOrderGross: number;
            newOrderNet: number;
            saleCash: number;
            saleCard: number;
            saleBank: number;
            saleWallet: number;
            debtCash: number;
            debtCard: number;
            debtBank: number;
            debtWallet: number;
            totalCash: number;
            totalCardBank: number;
            totalWallet: number;
            debtInPeriod: number;
            debtPrevPeriod: number;
            vat: number;
        }[];
    }>;
    staff(tenantId: string, from?: string, to?: string, branchIds?: string[], operatorId?: string, page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            serviceRevenue: number;
            productRevenue: number;
            cardRevenue: number;
            serveCount: number;
        };
        chart: never[];
        rows: {
            operatorId: string;
            name: string;
            serveCount: number;
            serviceRevenue: number;
            productQty: number;
            productRevenue: number;
            cardSoldCount: number;
            cardRevenue: number;
            consultCount: number;
            consultRevenue: number;
            totalRevenue: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            operatorId: string;
            name: string;
            serveCount: number;
            serviceRevenue: number;
            productQty: number;
            productRevenue: number;
            cardSoldCount: number;
            cardRevenue: number;
            consultCount: number;
            consultRevenue: number;
            totalRevenue: number;
        }[];
    }>;
    cashiers(tenantId: string, from?: string, to?: string, branchIds?: string[], page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            totalCollected: number;
            cashierCount: number;
            invoiceCount: number;
        };
        chart: never[];
        rows: {
            cashierId: string;
            name: string;
            invoiceCount: number;
            cash: number;
            card: number;
            bankTransfer: number;
            totalCollected: number;
            orderTotal: number;
            debt: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            cashierId: string;
            name: string;
            invoiceCount: number;
            cash: number;
            card: number;
            bankTransfer: number;
            totalCollected: number;
            orderTotal: number;
            debt: number;
        }[];
    }>;
    customers(tenantId: string, from?: string, to?: string, branchIds?: string[], search?: string, page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            customerCount: number;
            totalRevenue: number;
            avgPerCustomer: number;
            debtorCount: number;
        };
        chart: never[];
        rows: {
            customerId: string;
            name: string;
            mobile: string;
            code: string;
            rank: string;
            newReturning: string;
            invoiceCount: number;
            total: number;
            paid: number;
            debt: number;
            lastVisit: Date | null;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            customerId: string;
            name: string;
            mobile: string;
            code: string;
            rank: string;
            newReturning: string;
            invoiceCount: number;
            total: number;
            paid: number;
            debt: number;
            lastVisit: Date | null;
        }[];
    }>;
    commission(tenantId: string, from?: string, to?: string, branchIds?: string[], operatorId?: string, role?: CommissionRole, basis?: 'recorded' | 'collected', page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            total: number;
            byRole: {
                SERVER: number;
                SELLER: number;
                CONSULTANT: number;
                REFERRAL: number;
            };
            basis: "recorded" | "collected";
        };
        chart: never[];
        rows: {
            operatorId: string;
            name: string;
            role: CommissionRole;
            baseRevenue: number;
            rateLabel: string;
            commission: number;
            lineCount: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            operatorId: string;
            name: string;
            role: CommissionRole;
            baseRevenue: number;
            rateLabel: string;
            commission: number;
            lineCount: number;
        }[];
        _allExport: {
            operatorId: string;
            name: string;
            consultRevenue: number;
            consultCount: number;
            consultCommission: number;
            serviceRevenue: number;
            serviceCount: number;
            serviceCommission: number;
            cardRevenue: number;
            cardCount: number;
            cardCommission: number;
            productRevenue: number;
            productQty: number;
            productCommission: number;
            totalCommission: number;
        }[];
    }>;
    commissionPreview(tenantId: string, dto: CommissionPreviewDto): Promise<{
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
    customerDebt(tenantId: string, from?: string, to?: string, branchIds?: string[], search?: string, onlyDebt?: boolean, page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            totalDebt: number;
            debtorCount: number;
            overdueDebt: number;
            avgDebt: number;
        };
        chart: never[];
        rows: {
            customerId: string;
            name: string;
            mobile: string;
            totalBought: number;
            paid: number;
            debt: number;
            debtInvoiceCount: number;
            lastDebtAt: Date | null;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            customerId: string;
            name: string;
            mobile: string;
            totalBought: number;
            paid: number;
            debt: number;
            debtInvoiceCount: number;
            lastDebtAt: Date | null;
        }[];
        _allExport: {
            name: string;
            mobile: string;
            code: string;
            branch: string;
            createdAt: Date;
            payCount: number;
            lastPaymentAt: Date | null;
            total: number;
            paid: number;
            debt: number;
            serviceValue: number;
        }[];
    }>;
    private localDateKey;
}
