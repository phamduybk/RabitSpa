import { AuthUser } from '../../common/auth/jwt-payload';
import { CreateResourceDto, UpdateResourceDto } from './dto/resource.dto';
import { ResourcesService } from './resources.service';
export declare class ResourcesController {
    private readonly resources;
    constructor(resources: ResourcesService);
    list(t: string, user: AuthUser, branchId?: string, includeInactive?: string): Promise<{
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
    create(t: string, user: AuthUser, dto: CreateResourceDto): Promise<{
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
    update(t: string, user: AuthUser, id: string, dto: UpdateResourceDto): Promise<{
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
    remove(t: string, user: AuthUser, id: string): Promise<{
        success: boolean;
    }>;
    private scope;
}
