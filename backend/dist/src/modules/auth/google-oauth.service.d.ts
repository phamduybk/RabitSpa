import { ConfigService } from '@nestjs/config';
import { GoogleProfile } from './google-auth.service';
export declare class GoogleOAuthService {
    private readonly config;
    constructor(config: ConfigService);
    private clientId;
    private clientSecret;
    redirectUri(): string;
    isConfigured(): boolean;
    private client;
    buildAuthUrl(state: string): string;
    signState(data: Record<string, unknown>): string;
    verifyState(state: string): Record<string, any> | null;
    private stateSignature;
    exchangeCode(code: string): Promise<GoogleProfile>;
}
