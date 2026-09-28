import { ConfigService } from '@nestjs/config';
export declare class CloudflareError extends Error {
    readonly httpStatus: number;
    readonly cfErrors: {
        code?: number;
        message?: string;
    }[];
    constructor(message: string, httpStatus: number, cfErrors?: {
        code?: number;
        message?: string;
    }[]);
    isNotFound(): boolean;
}
export declare class CloudflareTunnelService {
    private readonly config;
    private readonly logger;
    constructor(config: ConfigService);
    private apiToken;
    private accountId;
    private zoneId;
    domain(): string;
    isConfigured(): boolean;
    createTunnel(name: string): Promise<{
        tunnelId: string;
        connectorToken: string;
    }>;
    getTunnelToken(tunnelId: string): Promise<string>;
    deleteTunnel(tunnelId: string): Promise<void>;
    configureIngress(tunnelId: string, hostname: string, service: string): Promise<void>;
    getIngressService(tunnelId: string): Promise<string | null>;
    upsertCname(subdomain: string, tunnelId: string): Promise<string>;
    findDnsRecordIdByName(fqdn: string): Promise<string | null>;
    deleteDnsRecord(recordId: string): Promise<void>;
    private call;
}
