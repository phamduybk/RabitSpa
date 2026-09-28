import { BusinessType } from '@prisma/client';
export declare class RegisterProfileDto {
    fullName: string;
    phone: string;
    referralCode?: string;
}
export declare class RegisterStoreDto {
    businessType: BusinessType;
    name: string;
    address?: string;
    province?: string;
    district?: string;
    country?: string;
}
export declare class RegisterAccountDto {
    email: string;
    password: string;
    subdomain: string;
}
export declare class RegisterDto {
    profile: RegisterProfileDto;
    store: RegisterStoreDto;
    account: RegisterAccountDto;
}
