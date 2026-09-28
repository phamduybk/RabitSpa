import { ConfigService } from '@nestjs/config';
export declare class SecretBoxService {
    private readonly config;
    private readonly logger;
    constructor(config: ConfigService);
    private key;
    isConfigured(): boolean;
    encrypt(plaintext: string): string | null;
    decrypt(payload: string): string | null;
}
