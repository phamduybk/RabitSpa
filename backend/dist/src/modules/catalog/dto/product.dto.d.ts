export declare class CreateProductCategoryDto {
    name: string;
    sortOrder?: number;
}
declare const UpdateProductCategoryDto_base: import("@nestjs/common").Type<Partial<CreateProductCategoryDto>>;
export declare class UpdateProductCategoryDto extends UpdateProductCategoryDto_base {
}
export declare class CreateProductDto {
    name: string;
    categoryId?: string;
    sku?: string;
    imageUrl?: string;
    unit?: string;
    price: number;
    costPrice?: number;
    isActive?: boolean;
}
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
}
export {};
