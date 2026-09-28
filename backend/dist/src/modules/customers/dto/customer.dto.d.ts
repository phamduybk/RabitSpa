import { CustomerSource, Gender } from '@prisma/client';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto';
export declare class CustomerQueryDto extends PaginationQueryDto {
    rank?: string;
    birthdayMonth?: number;
    debt?: string;
    tagId?: string;
}
export declare class CreateCustomerDto {
    fullName: string;
    mobile: string;
    email?: string;
    zalo?: string;
    gender?: Gender;
    address?: string;
    provinceName?: string;
    districtName?: string;
    dobDate?: number;
    dobMonth?: number;
    dobYear?: number;
    note?: string;
    source?: CustomerSource;
}
declare const UpdateCustomerDto_base: import("@nestjs/common").Type<Partial<CreateCustomerDto>>;
export declare class UpdateCustomerDto extends UpdateCustomerDto_base {
}
export declare class CreateCustomerNoteDto {
    content: string;
}
export declare class CreateCustomerPhotoDto {
    dataUrl: string;
    caption?: string;
    tag?: 'BEFORE' | 'AFTER';
}
export declare class CreateCustomerTagDto {
    name: string;
    color?: string;
}
export declare class SetCustomerTagsDto {
    tagIds: string[];
}
export {};
