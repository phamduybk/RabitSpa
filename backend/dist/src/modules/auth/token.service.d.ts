import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { RoleName } from '@prisma/client';
export declare class TokenService {
    private readonly jwt;
    private readonly config;
    constructor(jwt: JwtService, config: ConfigService);
    issueTokens(params: {
        userId: string;
        tenantId: string;
        email: string;
        roles: RoleName[];
        branchIds: string[];
        tokenVersion?: number;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    verifyRefresh(token: string): Promise<{
        sub: string;
        tenantId: string;
        tokenVersion?: number;
    }>;
}
