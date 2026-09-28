import { HeartbeatDto, ProvisionPublicLinkDto, RedeemPairingDto } from './dto/public-link.dto';
import { PublicLinkService } from './public-link.service';
export declare class PublicLinkController {
    private readonly publicLink;
    constructor(publicLink: PublicLinkService);
    status(tenantId: string): Promise<{
        subdomain: string;
        hostname: string;
        publicUrl: string;
        customDomain: string | null;
        customDomainUrl: string | null;
        localPort: number;
        status: string;
        cloudflareConfigured: boolean;
        instances: {
            online: boolean;
            id: string;
            createdAt: Date;
            os: string | null;
            appVersion: string | null;
            lastSeenAt: Date | null;
        }[];
    }>;
    provision(tenantId: string, dto: ProvisionPublicLinkDto): Promise<{
        subdomain: string;
        hostname: string;
        publicUrl: string;
        connectorToken: null;
        tunnelId: null;
        status: "PENDING";
        message: string;
    } | {
        subdomain: string;
        hostname: string;
        publicUrl: string;
        connectorToken: string;
        tunnelId: string;
        status: "ACTIVE";
        message: string;
    }>;
    revoke(tenantId: string): Promise<{
        status: string;
        message: string;
    }>;
    createPairingCode(tenantId: string): Promise<{
        code: string;
        expiresInSeconds: number;
    }>;
    pair(dto: RedeemPairingDto): Promise<{
        deviceToken: string;
        subdomain: string;
        hostname: string;
        publicUrl: string;
        customDomain: string | null;
        connectorToken: string | null;
        tunnelId: string | null;
        localPort: number;
    }>;
    heartbeat(deviceToken: string, dto: HeartbeatDto): Promise<{
        subdomain: string;
        hostname: string;
        publicUrl: string;
        customDomain: string | null;
        customDomainUrl: string | null;
        hasPublicLink: boolean;
        tunnelId: string | null;
        connectorToken: string | null;
        localPort: number;
    }>;
}
