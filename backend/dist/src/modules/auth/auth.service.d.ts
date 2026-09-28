import { ConfigService } from '@nestjs/config';
import { MailService } from '../../common/mail/mail.service';
import { PrismaService } from '../../common/prisma/prisma.service';
import { AuthResponseDto } from './dto/auth-response.dto';
import { GoogleLoginDto } from './dto/google-login.dto';
import { LoginDto } from './dto/login.dto';
import { GoogleAuthService } from './google-auth.service';
import { TokenService } from './token.service';
export declare class AuthService {
    private readonly prisma;
    private readonly tokens;
    private readonly mail;
    private readonly config;
    private readonly googleAuth;
    constructor(prisma: PrismaService, tokens: TokenService, mail: MailService, config: ConfigService, googleAuth: GoogleAuthService);
    login(dto: LoginDto, subdomain?: string | null): Promise<AuthResponseDto>;
    loginWithGoogle(dto: GoogleLoginDto, subdomain?: string | null): Promise<AuthResponseDto>;
    tenantsByEmail(email: string): Promise<{
        tenants: {
            id: string;
            name: string;
            subdomain: string;
            businessType: import("@prisma/client").$Enums.BusinessType;
        }[];
    }>;
    refresh(refreshToken: string): Promise<AuthResponseDto>;
    issueSessionFor(userId: string, tenantId: string): Promise<AuthResponseDto>;
    findTenantsForEmail(email: string): Promise<({
        tenant: {
            id: string;
            name: string;
            subdomain: string;
            businessType: import("@prisma/client").$Enums.BusinessType;
            phone: string | null;
            address: string | null;
            province: string | null;
            district: string | null;
            country: string;
            referralCode: string | null;
            status: import("@prisma/client").$Enums.TenantStatus;
            timezone: string;
            logoUrl: string | null;
            customDomain: string | null;
            cfTunnelId: string | null;
            cfDnsRecordId: string | null;
            localPort: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        deletedAt: Date | null;
        email: string;
        passwordHash: string | null;
        googleId: string | null;
        tokenVersion: number;
    }) | null>;
    linkGoogleId(userId: string, googleId: string): Promise<void>;
    private buildAuthResponse;
    profile(userId: string): Promise<{
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
    updateProfile(userId: string, name: string, phone?: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
    }>;
    changePassword(userId: string, currentPassword: string, newPassword: string): Promise<{
        success: boolean;
    }>;
    revokeAllSessions(userId: string): Promise<{
        success: boolean;
    }>;
    forgotPassword(dto: {
        email: string;
        subdomain?: string;
    }, hostSubdomain?: string | null): Promise<{
        success: boolean;
        message: string;
    }>;
    resetPassword(token: string, newPassword: string): Promise<{
        success: boolean;
    }>;
}
