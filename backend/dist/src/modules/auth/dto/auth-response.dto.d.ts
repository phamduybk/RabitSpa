export declare class AuthUserDto {
    id: string;
    name: string;
    email: string;
    roles: string[];
}
export declare class TenantBriefDto {
    id: string;
    name: string;
    subdomain: string;
}
export declare class AuthResponseDto {
    accessToken: string;
    refreshToken: string;
    user: AuthUserDto;
    tenant: TenantBriefDto;
}
