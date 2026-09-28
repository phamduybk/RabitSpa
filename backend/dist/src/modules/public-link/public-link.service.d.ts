import { ConfigService } from '@nestjs/config';
import { CloudflareTunnelService } from '../../common/cloudflare/cloudflare-tunnel.service';
import { SecretBoxService } from '../../common/crypto/secret-box.service';
import { PrismaService } from '../../common/prisma/prisma.service';
export declare class PublicLinkService {
    private readonly prisma;
    private readonly cloudflare;
    private readonly secretBox;
    private readonly config;
    private readonly logger;
    constructor(prisma: PrismaService, cloudflare: CloudflareTunnelService, secretBox: SecretBoxService, config: ConfigService);
    private rootDomain;
    provision(tenantId: string, localPort?: number): Promise<{
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
    revoke(tenantId: string): Promise<{
        status: string;
        message: string;
    }>;
    createPairingCode(tenantId: string): Promise<{
        code: string;
        expiresInSeconds: number;
    }>;
    redeemPairingCode(input: {
        code: string;
        machineFingerprint?: string;
        os?: string;
        appVersion?: string;
        localPort?: number;
    }): Promise<{
        deviceToken: string;
        subdomain: string;
        hostname: string;
        publicUrl: string;
        customDomain: string | null;
        connectorToken: string | null;
        tunnelId: string | null;
        localPort: number;
    }>;
    heartbeat(deviceToken: string, info?: {
        os?: string;
        appVersion?: string;
        currentTunnelId?: string;
    }): Promise<{
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
    issueSsoCode(userId: string, tenantId: string): Promise<{
        code: string;
        expiresInSeconds: number;
    }>;
    consumeSsoCode(code: string): Promise<{
        userId: string;
        tenantId: string;
    }>;
    private normalizePort;
    private generateUniquePairingCode;
}
