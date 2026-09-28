import { InvoiceItemType } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
export declare class ExtraReportsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private resolveRange;
    private paginate;
    private localDateKey;
    private invRevenueWhere;
    private lineBase;
    salesByItem(tenantId: string, from?: string, to?: string, branchIds?: string[], itemType?: InvoiceItemType, page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            itemCount: number;
            serviceCount: number;
            productCount: number;
            totalQty: number;
            totalGross: number;
            totalDiscount: number;
            totalNet: number;
            totalCardDeduct: number;
            totalReceived: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            code: string;
            name: string;
            typeLabel: string;
            itemType: import("@prisma/client").$Enums.InvoiceItemType;
            category: string;
            qty: number;
            grossRevenue: number;
            discount: number;
            netRevenue: number;
            cardDeduct: number;
            received: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            code: string;
            name: string;
            typeLabel: string;
            itemType: import("@prisma/client").$Enums.InvoiceItemType;
            category: string;
            qty: number;
            grossRevenue: number;
            discount: number;
            netRevenue: number;
            cardDeduct: number;
            received: number;
        }[];
    }>;
    customerStats(tenantId: string, from?: string, to?: string, branchIds?: string[], page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            totalCustomers: number;
            newCustomers: number;
            returningCustomers: number;
            visitedInPeriod: number;
            genderMale: number;
            genderFemale: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            rank: string;
            total: number;
            newCount: number;
            returningCount: number;
            male: number;
            female: number;
            other: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            rank: string;
            total: number;
            newCount: number;
            returningCount: number;
            male: number;
            female: number;
            other: number;
        }[];
    }>;
    bookingStats(tenantId: string, from?: string, to?: string, branchIds?: string[], page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            total: number;
            completed: number;
            canceled: number;
            noShow: number;
            completionRate: number;
            cancelRate: number;
            noShowRate: number;
            online: number;
            walkIn: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            time: string;
            total: number;
            completed: number;
            canceled: number;
            noShow: number;
            completionRate: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            time: string;
            total: number;
            completed: number;
            canceled: number;
            noShow: number;
            completionRate: number;
        }[];
        _sourceRows: {
            source: string;
            count: number;
            percent: number;
        }[];
    }>;
    usageByCustomer(tenantId: string, from?: string, to?: string, branchIds?: string[], search?: string, page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            customerCount: number;
            itemCount: number;
            totalQty: number;
            totalRevenue: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            customerCode: string;
            customerName: string;
            mobile: string;
            typeLabel: string;
            itemType: import("@prisma/client").$Enums.InvoiceItemType;
            itemName: string;
            usageCount: number;
            qty: number;
            netRevenue: number;
            lastUsedAt: Date;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            customerCode: string;
            customerName: string;
            mobile: string;
            typeLabel: string;
            itemType: import("@prisma/client").$Enums.InvoiceItemType;
            itemName: string;
            usageCount: number;
            qty: number;
            netRevenue: number;
            lastUsedAt: Date;
        }[];
    }>;
    serviceConsumptionCost(tenantId: string, from?: string, to?: string, branchIds?: string[], page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            serviceCount: number;
            totalSoldQty: number;
            totalRevenue: number;
            totalConsumedCost: number;
            productCount: number;
            avgCostRatio: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            code: string;
            name: string;
            soldQty: number;
            revenue: number;
            productTypes: number;
            consumedCost: number;
            costRatio: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            code: string;
            name: string;
            soldQty: number;
            revenue: number;
            productTypes: number;
            consumedCost: number;
            costRatio: number;
        }[];
        _productRows: {
            name: string;
            code: string;
            usageCount: number;
            qty: number;
            cost: number;
        }[];
    }>;
}
