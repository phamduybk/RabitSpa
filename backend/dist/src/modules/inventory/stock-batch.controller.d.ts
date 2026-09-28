import { AuthUser } from '../../common/auth/jwt-payload';
import { StockBatchService } from './stock-batch.service';
declare class CreateBatchDto {
    productId: string;
    branchId?: string;
    supplierId?: string;
    batchNo?: string;
    expiryDate?: string;
    quantity: number;
    costPrice?: number;
    note?: string;
}
export declare class StockBatchController {
    private readonly batches;
    constructor(batches: StockBatchService);
    list(t: string, user: AuthUser, productId?: string, branchId?: string): Promise<{
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
    create(t: string, user: AuthUser, dto: CreateBatchDto): Promise<{
        id: string;
        batchNo: string;
        quantityIn: number;
        quantityRemaining: number;
        costPrice: number;
        expiryDate: string | null;
    }>;
}
export {};
