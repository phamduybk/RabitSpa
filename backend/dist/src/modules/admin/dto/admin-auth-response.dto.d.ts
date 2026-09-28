export declare class AdminUserDto {
    id: string;
    name: string;
    email: string;
}
export declare class AdminAuthResponseDto {
    accessToken: string;
    user: AdminUserDto;
}
