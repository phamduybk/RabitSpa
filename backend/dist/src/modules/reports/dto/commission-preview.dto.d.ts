import { InvoiceItemType } from '@prisma/client';
export declare class CommissionPreviewItemDto {
    refId?: string;
    itemType: InvoiceItemType;
    price: number;
    quantity: number;
    discount?: number;
    serverId?: string;
    sellerId?: string;
    consultantId?: string;
}
export declare class CommissionPreviewDto {
    items: CommissionPreviewItemDto[];
}
