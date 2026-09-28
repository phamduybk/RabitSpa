import { AuthUser } from '../../common/auth/jwt-payload';
import { PaginationQueryDto } from '../../common/dto/pagination.dto';
import { CatalogService } from './catalog.service';
import { CreateServiceCategoryDto, CreateServiceDto, UpdateServiceCategoryDto, UpdateServiceDto } from './dto/service.dto';
import { CreateProductCategoryDto, CreateProductDto, UpdateProductCategoryDto, UpdateProductDto } from './dto/product.dto';
import { UploadImageDto } from './dto/upload.dto';
declare class CatalogQueryDto extends PaginationQueryDto {
    categoryId?: string;
    active?: boolean;
    branchId?: string;
}
export declare class CatalogController {
    private readonly catalog;
    constructor(catalog: CatalogService);
    uploadImage(t: string, dto: UploadImageDto): {
        url: string;
    };
    listServiceCategories(t: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }[]>;
    createServiceCategory(t: string, dto: CreateServiceCategoryDto): import("@prisma/client").Prisma.Prisma__ServiceCategoryClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateServiceCategory(t: string, id: string, dto: UpdateServiceCategoryDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }>;
    removeServiceCategory(t: string, id: string): Promise<{
        success: boolean;
    }>;
    listServices(t: string, query: CatalogQueryDto): Promise<import("../../common/dto/pagination.dto").Paginated<{
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
    createService(t: string, dto: CreateServiceDto): Promise<{
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
    updateService(t: string, id: string, dto: UpdateServiceDto): Promise<{
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
    removeService(t: string, id: string): Promise<{
        success: boolean;
    }>;
    listProductCategories(t: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }[]>;
    createProductCategory(t: string, dto: CreateProductCategoryDto): import("@prisma/client").Prisma.Prisma__ProductCategoryClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateProductCategory(t: string, id: string, dto: UpdateProductCategoryDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        sortOrder: number;
    }>;
    removeProductCategory(t: string, id: string): Promise<{
        success: boolean;
    }>;
    listProducts(t: string, user: AuthUser, query: CatalogQueryDto): Promise<import("../../common/dto/pagination.dto").Paginated<{
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
    createProduct(t: string, dto: CreateProductDto): Promise<{
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
    updateProduct(t: string, id: string, dto: UpdateProductDto): Promise<{
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
    removeProduct(t: string, id: string): Promise<{
        success: boolean;
    }>;
}
export {};
