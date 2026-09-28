import { PrismaService } from '../../../common/prisma/prisma.service';
import { AdminAuthResponseDto } from '../dto/admin-auth-response.dto';
import { AdminLoginDto } from '../dto/admin-login.dto';
import { AdminTokenService } from './admin-token.service';
export declare class AdminAuthService {
    private readonly prisma;
    private readonly tokens;
    constructor(prisma: PrismaService, tokens: AdminTokenService);
    login(dto: AdminLoginDto): Promise<AdminAuthResponseDto>;
    profile(userId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        isActive: boolean;
        email: string;
    }>;
}
