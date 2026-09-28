import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateDomainRequestDto } from './dto/create-domain-request.dto';
export declare class DomainsService {
    private readonly prisma;
    private readonly config;
    constructor(prisma: PrismaService, config: ConfigService);
    private rootDomain;
    getConfig(tenantId: string): Promise<{
        subdomain: string;
        publicUrl: string;
        customDomain: string | null;
        customDomainUrl: string | null;
        tenantStatus: import("@prisma/client").$Enums.TenantStatus;
        pendingRequest: {
            id: string;
            status: import("@prisma/client").$Enums.DomainRequestStatus;
            customDomain: string | null;
            createdAt: Date;
            tenantId: string;
            type: import("@prisma/client").$Enums.DomainRequestType;
            requestedByUserId: string | null;
            requestedSubdomain: string | null;
            reason: string | null;
            reviewedBy: string | null;
            reviewNote: string | null;
            reviewedAt: Date | null;
        } | null;
        latestRequest: {
            id: string;
            status: import("@prisma/client").$Enums.DomainRequestStatus;
            customDomain: string | null;
            createdAt: Date;
            tenantId: string;
            type: import("@prisma/client").$Enums.DomainRequestType;
            requestedByUserId: string | null;
            requestedSubdomain: string | null;
            reason: string | null;
            reviewedBy: string | null;
            reviewNote: string | null;
            reviewedAt: Date | null;
        } | null;
        cnameTarget: string;
    }>;
    listRequests(tenantId: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.DomainRequestStatus;
        customDomain: string | null;
        createdAt: Date;
        tenantId: string;
        type: import("@prisma/client").$Enums.DomainRequestType;
        requestedByUserId: string | null;
        requestedSubdomain: string | null;
        reason: string | null;
        reviewedBy: string | null;
        reviewNote: string | null;
        reviewedAt: Date | null;
    }[]>;
    createRequest(tenantId: string, userId: string | undefined, dto: CreateDomainRequestDto): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.DomainRequestStatus;
        customDomain: string | null;
        createdAt: Date;
        tenantId: string;
        type: import("@prisma/client").$Enums.DomainRequestType;
        requestedByUserId: string | null;
        requestedSubdomain: string | null;
        reason: string | null;
        reviewedBy: string | null;
        reviewNote: string | null;
        reviewedAt: Date | null;
    }>;
    private createSubdomainRequest;
    private createCustomDomainRequest;
}
