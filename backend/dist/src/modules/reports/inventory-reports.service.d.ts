import { StockMovementType } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
export declare class InventoryReportsService {
    private readonly prisma;
    private readonly LOW_STOCK_THRESHOLD;
    private readonly TYPE_LABEL;
    constructor(prisma: PrismaService);
    movements(tenantId: string, from?: string, to?: string, branchIds?: string[], type?: StockMovementType, page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            totalIn: number;
            totalOut: number;
            purchaseValue: number;
            movementCount: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            time: string;
            product: string;
            sku: string;
            typeLabel: string;
            qtyIn: number;
            qtyOut: number;
            value: number;
            note: string;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            time: string;
            product: string;
            sku: string;
            typeLabel: string;
            qtyIn: number;
            qtyOut: number;
            value: number;
            note: string;
        }[];
        _allExport: {
            code: string;
            name: string;
            category: string;
            costPrice: number;
            avgImportPrice: number;
            salePrice: number;
            openingStock: number;
            totalIn: number;
            totalOut: number;
            transferIn: number;
            transferOut: number;
            closingStock: number;
        }[];
        _metaExtra: string[];
    }>;
    private movementsSnapshot;
    productsSold(tenantId: string, from?: string, to?: string, branchIds?: string[], page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            productCount: number;
            totalQty: number;
            totalRevenue: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            name: string;
            sku: string;
            qtySold: number;
            revenue: number;
            currentStock: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            name: string;
            sku: string;
            qtySold: number;
            revenue: number;
            currentStock: number;
        }[];
    }>;
    stock(tenantId: string, branchIds?: string[], categoryId?: string, status?: 'in' | 'low' | 'out', page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            productCount: number;
            totalQty: number;
            totalCostValue: number;
            lowStockCount: number;
            outOfStockCount: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            name: string;
            sku: string;
            category: string;
            quantity: number;
            costValue: number;
            saleValue: number;
            status: string;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            name: string;
            sku: string;
            category: string;
            quantity: number;
            costValue: number;
            saleValue: number;
            status: string;
        }[];
    }>;
    exportByStaff(tenantId: string, from?: string, to?: string, branchIds?: string[], operatorId?: string, page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            staffCount: number;
            totalQtyOut: number;
            totalValue: number;
            movementCount: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            name: string;
            movementCount: number;
            qtyOut: number;
            value: number;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            name: string;
            movementCount: number;
            qtyOut: number;
            value: number;
        }[];
    }>;
    private readonly EXPIRY_SOON_DAYS;
    private readonly EXPIRY_LABEL;
    batches(tenantId: string, branchIds?: string[], categoryId?: string, expiry?: 'expired' | 'soon' | 'ok' | 'none', productId?: string, includeEmpty?: boolean, page?: number, pageSize?: number, sort?: string): Promise<{
        kpis: {
            batchCount: number;
            totalRemaining: number;
            totalValue: number;
            expiringSoonCount: number;
            expiredCount: number;
        };
        chart: {
            label: string;
            value: number;
        }[];
        rows: {
            product: string;
            sku: string;
            category: string;
            batchNo: string;
            supplier: string;
            expiryDate: string;
            quantityIn: number;
            quantityRemaining: number;
            costPrice: number;
            value: number;
            status: string;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
        _all: {
            product: string;
            sku: string;
            category: string;
            batchNo: string;
            supplier: string;
            expiryDate: string;
            quantityIn: number;
            quantityRemaining: number;
            costPrice: number;
            value: number;
            status: string;
        }[];
    }>;
    private resolveRange;
    private paginate;
    private localDateKey;
    private localDateTime;
}
