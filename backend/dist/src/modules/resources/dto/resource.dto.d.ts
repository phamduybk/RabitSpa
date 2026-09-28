import { ResourceType } from '@prisma/client';
export declare class CreateResourceDto {
    name: string;
    type?: ResourceType;
    branchId?: string;
    orderIndex?: number;
    active?: boolean;
}
export declare class UpdateResourceDto {
    name?: string;
    type?: ResourceType;
    branchId?: string;
    orderIndex?: number;
    active?: boolean;
}
