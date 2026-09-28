import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class AdminTokenService {
    private readonly jwt;
    private readonly config;
    constructor(jwt: JwtService, config: ConfigService);
    issueToken(params: {
        userId: string;
        email: string;
    }): Promise<string>;
}
