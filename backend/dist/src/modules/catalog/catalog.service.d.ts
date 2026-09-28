import { Prisma } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { PlanLimitService } from '../../common/tenant/plan-limit.service';
import { CreateServiceCategoryDto, CreateServiceDto, UpdateServiceCategoryDto, UpdateServiceDto } from './dto/service.dto';
import { CreateProductCategoryDto, CreateProductDto, UpdateProductCategoryDto, UpdateProductDto } from './dto/product.dto';
export declare class CatalogService {
    private readonly prisma;
    private readonly limits;
    constructor(prisma: PrismaService, limits: PlanLimitService);
    private assertCatalogLimit;
    listServiceCategories(tenantId: string): Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }[]>;
    createServiceCategory(tenantId: string, dto: CreateServiceCategoryDto): Prisma.Prisma__ServiceCategoryClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateServiceCategory(tenantId: string, id: string, dto: UpdateServiceCategoryDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }>;
    removeServiceCategory(tenantId: string, id: string): Promise<{
        success: boolean;
    }>;
    listServices(tenantId: string, page: number, limit: number, q?: string, categoryId?: string, active?: boolean): Promise<import("../../common/dto/pagination.dto").Paginated<{
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            deletedAt: Date | null;
            sortOrder: number;
        } | null;
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        categoryId: string | null;
        code: string | null;
        price: bigint;
        durationMinutes: number;
        description: string | null;
        imageUrl: string | null;
        isActive: boolean;
        deletedAt: Date | null;
    }>>;
    createService(tenantId: string, dto: CreateServiceDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        categoryId: string | null;
        code: string | null;
        price: bigint;
        durationMinutes: number;
        description: string | null;
        imageUrl: string | null;
        isActive: boolean;
        deletedAt: Date | null;
    }>;
    updateService(tenantId: string, id: string, dto: UpdateServiceDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        categoryId: string | null;
        code: string | null;
        price: bigint;
        durationMinutes: number;
        description: string | null;
        imageUrl: string | null;
        isActive: boolean;
        deletedAt: Date | null;
    }>;
    removeService(tenantId: string, id: string): Promise<{
        success: boolean;
    }>;
    listProductCategories(tenantId: string): Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }[]>;
    createProductCategory(tenantId: string, dto: CreateProductCategoryDto): Prisma.Prisma__ProductCategoryClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateProductCategory(tenantId: string, id: string, dto: UpdateProductCategoryDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }>;
    removeProductCategory(tenantId: string, id: string): Promise<{
        success: boolean;
    }>;
    listProducts(tenantId: string, page: number, limit: number, q?: string, categoryId?: string, active?: boolean, branchId?: string, branchIds?: string[]): Promise<import("../../common/dto/pagination.dto").Paginated<{
        stocks: undefined;
        stockQuantity?: number | undefined;
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            deletedAt: Date | null;
            sortOrder: number;
        } | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        categoryId: string | null;
        price: bigint;
        imageUrl: string | null;
        isActive: boolean;
        deletedAt: Date | null;
        sku: string | null;
        unit: string | null;
        costPrice: bigint;
    }>>;
    createProduct(tenantId: string, dto: CreateProductDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        categoryId: string | null;
        price: bigint;
        imageUrl: string | null;
        isActive: boolean;
        deletedAt: Date | null;
        sku: string | null;
        unit: string | null;
        costPrice: bigint;
    }>;
    updateProduct(tenantId: string, id: string, dto: UpdateProductDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        categoryId: string | null;
        price: bigint;
        imageUrl: string | null;
        isActive: boolean;
        deletedAt: Date | null;
        sku: string | null;
        unit: string | null;
        costPrice: bigint;
    }>;
    removeProduct(tenantId: string, id: string): Promise<{
        success: boolean;
    }>;
    private static readonly MIME_EXT;
    private static readonly MAX_IMAGE_BYTES;
    saveImage(_tenantId: string, dataUrl: string): {
        url: string;
    };
    private ensure;
}
