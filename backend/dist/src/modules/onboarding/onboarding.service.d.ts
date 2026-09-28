import { PrismaService } from '../../common/prisma/prisma.service';
import { AuthResponseDto } from '../auth/dto/auth-response.dto';
import { GoogleAuthService } from '../auth/google-auth.service';
import { TokenService } from '../auth/token.service';
import { GoogleRegisterDto } from './dto/google-register.dto';
import { RegisterDto } from './dto/register.dto';
export declare class OnboardingService {
    private readonly prisma;
    private readonly tokens;
    private readonly googleAuth;
    constructor(prisma: PrismaService, tokens: TokenService, googleAuth: GoogleAuthService);
    checkSubdomain(value: string): Promise<{
        available: boolean;
        reason?: string;
    }>;
    register(dto: RegisterDto): Promise<AuthResponseDto>;
    registerWithGoogle(dto: GoogleRegisterDto): Promise<AuthResponseDto>;
}
