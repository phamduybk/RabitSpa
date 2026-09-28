import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateResourceDto, UpdateResourceDto } from './dto/resource.dto';
export declare class ResourcesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(tenantId: string, params: {
        branchId?: string;
        includeInactive?: boolean;
    }, branchIds?: string[]): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        branchId: string;
        type: import("@prisma/client").$Enums.ResourceType;
        active: boolean;
        orderIndex: number;
    }[]>;
    findOne(tenantId: string, id: string, branchIds?: string[]): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        branchId: string;
        type: import("@prisma/client").$Enums.ResourceType;
        active: boolean;
        orderIndex: number;
    }>;
    create(tenantId: string, dto: CreateResourceDto, branchIds?: string[]): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        branchId: string;
        type: import("@prisma/client").$Enums.ResourceType;
        active: boolean;
        orderIndex: number;
    }>;
    update(tenantId: string, id: string, dto: UpdateResourceDto, branchIds?: string[]): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        branchId: string;
        type: import("@prisma/client").$Enums.ResourceType;
        active: boolean;
        orderIndex: number;
    }>;
    remove(tenantId: string, id: string, branchIds?: string[]): Promise<{
        success: boolean;
    }>;
    private defaultBranchId;
    private ensureBranch;
}
