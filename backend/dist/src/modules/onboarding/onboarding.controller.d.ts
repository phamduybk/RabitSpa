import { AuthResponseDto } from '../auth/dto/auth-response.dto';
import { GoogleRegisterDto } from './dto/google-register.dto';
import { RegisterDto } from './dto/register.dto';
import { OnboardingService } from './onboarding.service';
export declare class OnboardingController {
    private readonly onboarding;
    constructor(onboarding: OnboardingService);
    checkSubdomain(value: string): Promise<{
        available: boolean;
        reason?: string;
    }>;
    register(dto: RegisterDto): Promise<AuthResponseDto>;
    registerGoogle(dto: GoogleRegisterDto): Promise<AuthResponseDto>;
}
