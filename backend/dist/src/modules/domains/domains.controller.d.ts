import { AuthUser } from '../../common/auth/jwt-payload';
import { CreateDomainRequestDto } from './dto/create-domain-request.dto';
import { DomainsService } from './domains.service';
export declare class DomainsController {
    private readonly domains;
    constructor(domains: DomainsService);
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
    createRequest(tenantId: string, user: AuthUser, dto: CreateDomainRequestDto): Promise<{
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
}
