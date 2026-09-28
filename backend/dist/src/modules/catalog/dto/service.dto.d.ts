export declare class CreateServiceCategoryDto {
    name: string;
    sortOrder?: number;
}
declare const UpdateServiceCategoryDto_base: import("@nestjs/common").Type<Partial<CreateServiceCategoryDto>>;
export declare class UpdateServiceCategoryDto extends UpdateServiceCategoryDto_base {
}
export declare class CreateServiceDto {
    name: string;
    categoryId?: string;
    price: number;
    durationMinutes: number;
    code?: string;
    description?: string;
    imageUrl?: string;
    isActive?: boolean;
}
declare const UpdateServiceDto_base: import("@nestjs/common").Type<Partial<CreateServiceDto>>;
export declare class UpdateServiceDto extends UpdateServiceDto_base {
}
export {};
