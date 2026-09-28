export interface AdminJwtPayload {
    sub: string;
    email: string;
    role: 'SUPER_ADMIN';
}
export interface SystemAuthUser {
    userId: string;
    email: string;
    name: string;
}
