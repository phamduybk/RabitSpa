import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { ExchangeSsoDto } from '../public-link/dto/public-link.dto';
import { PublicLinkService } from '../public-link/public-link.service';
import { GoogleOAuthService } from './google-oauth.service';
import { AuthUser } from '../../common/auth/jwt-payload';
import { AuthService } from './auth.service';
import { AuthResponseDto } from './dto/auth-response.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { GoogleLoginDto } from './dto/google-login.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { TenantsByEmailDto } from './dto/tenants-by-email.dto';
declare class RefreshDto {
    refreshToken: string;
}
declare class UpdateProfileDto {
    name: string;
    phone?: string;
}
declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}
export declare class AuthController {
    private readonly auth;
    private readonly config;
    private readonly googleOAuth;
    private readonly publicLink;
    constructor(auth: AuthService, config: ConfigService, googleOAuth: GoogleOAuthService, publicLink: PublicLinkService);
    private rootDomain;
    private safeReturnTo;
    login(dto: LoginDto, host?: string): Promise<AuthResponseDto>;
    googleLogin(dto: GoogleLoginDto, host?: string): Promise<AuthResponseDto>;
    googleStart(returnTo: string | undefined, res: Response): void;
    googleCallback(code: string | undefined, state: string | undefined, error: string | undefined, res: Response): Promise<void>;
    ssoExchange(dto: ExchangeSsoDto): Promise<AuthResponseDto>;
    ssoIssue(user: AuthUser): Promise<{
        code: string;
        expiresInSeconds: number;
    }>;
    tenantsByEmail(dto: TenantsByEmailDto): Promise<{
        tenants: {
            id: string;
            name: string;
            subdomain: string;
            businessType: import("@prisma/client").$Enums.BusinessType;
        }[];
    }>;
    refresh(dto: RefreshDto): Promise<AuthResponseDto>;
    forgotPassword(dto: ForgotPasswordDto, host?: string): Promise<{
        success: boolean;
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        success: boolean;
    }>;
    profile(user: AuthUser): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        roles: {
            branch: {
                id: string;
                name: string;
            };
            role: import("@prisma/client").$Enums.RoleName;
        }[];
    }>;
    updateProfile(user: AuthUser, dto: UpdateProfileDto): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
    }>;
    changePassword(user: AuthUser, dto: ChangePasswordDto): Promise<{
        success: boolean;
    }>;
    revokeSessions(user: AuthUser): Promise<{
        success: boolean;
    }>;
}
export {};
