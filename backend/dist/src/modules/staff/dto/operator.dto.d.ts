import { SalaryType } from '@prisma/client';
export declare class CreateOperatorDto {
    name: string;
    branchId?: string;
    title?: string;
    level?: number;
    phone?: string;
    email?: string;
    avatarColor?: string;
    showInPublicBooking?: boolean;
    basicSalary?: number;
    basicSalaryType?: SalaryType;
}
declare const UpdateOperatorDto_base: import("@nestjs/common").Type<Partial<CreateOperatorDto>>;
export declare class UpdateOperatorDto extends UpdateOperatorDto_base {
    isActive?: boolean;
}
export {};
