import { SystemAuthUser } from '../../../common/auth/admin-jwt-payload';
import { AdminAuthService } from './admin-auth.service';
import { AdminAuthResponseDto } from '../dto/admin-auth-response.dto';
import { AdminLoginDto } from '../dto/admin-login.dto';
export declare class AdminAuthController {
    private readonly adminAuth;
    constructor(adminAuth: AdminAuthService);
    login(dto: AdminLoginDto): Promise<AdminAuthResponseDto>;
    me(user: SystemAuthUser): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        isActive: boolean;
        email: string;
    }>;
}
