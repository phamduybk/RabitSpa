import { ConfigService } from '@nestjs/config';
export interface GoogleProfile {
    sub: string;
    email: string;
    emailVerified: boolean;
    name: string;
}
export declare class GoogleAuthService {
    private readonly config;
    constructor(config: ConfigService);
    private getClientId;
    verifyIdToken(idToken: string): Promise<GoogleProfile>;
}
