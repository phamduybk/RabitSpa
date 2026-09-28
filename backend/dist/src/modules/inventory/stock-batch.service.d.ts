import { PrismaService } from '../../common/prisma/prisma.service';
export interface CreateBatchDto {
    productId: string;
    branchId?: string;
    supplierId?: string;
    batchNo?: string;
    expiryDate?: string;
    quantity: number;
    costPrice?: number;
    note?: string;
}
export declare class StockBatchService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(tenantId: string, productId?: string, branchIds?: string[]): Promise<{
        id: string;
        productId: string;
        product: string;
        sku: string | null;
        supplier: string | null;
        batchNo: string;
        expiryDate: string | null;
        quantityIn: number;
        quantityRemaining: number;
        costPrice: number;
        receivedAt: Date;
    }[]>;
    create(tenantId: string, dto: CreateBatchDto, branchIds?: string[]): Promise<{
        id: string;
        batchNo: string;
        quantityIn: number;
        quantityRemaining: number;
        costPrice: number;
        expiryDate: string | null;
    }>;
    private genBatchNo;
    private resolveBranchId;
}
