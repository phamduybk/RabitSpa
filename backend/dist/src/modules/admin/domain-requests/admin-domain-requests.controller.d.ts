import { SystemAuthUser } from '../../../common/auth/admin-jwt-payload';
import { AdminDomainRequestsService } from './admin-domain-requests.service';
import { AdminDomainRequestQueryDto } from '../dto/domain-request-query.dto';
import { ApproveDomainRequestDto, RejectDomainRequestDto } from '../dto/domain-request-review.dto';
export declare class AdminDomainRequestsController {
    private readonly service;
    constructor(service: AdminDomainRequestsService);
    list(query: AdminDomainRequestQueryDto): Promise<import("../../../common/dto/pagination.dto").Paginated<any>>;
    detail(id: string): Promise<{
        owner: {
            id: string;
            name: string;
            phone: string | null;
            email: string;
        } | null;
        tenant: {
            id: string;
            name: string;
            subdomain: string;
            status: import("@prisma/client").$Enums.TenantStatus;
            customDomain: string | null;
        };
        requestedByUser: {
            id: string;
            name: string;
            email: string;
        } | null;
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
    approve(id: string, dto: ApproveDomainRequestDto, admin: SystemAuthUser): Promise<{
        request: {
            tenant: {
                id: string;
                name: string;
                subdomain: string;
                status: import("@prisma/client").$Enums.TenantStatus;
                customDomain: string | null;
            };
            requestedByUser: {
                id: string;
                name: string;
                email: string;
            } | null;
        } & {
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
        };
        tenant: {
            id: string;
            name: string;
            subdomain: string;
        };
        publicUrl: string;
    } | {
        request: {
            tenant: {
                id: string;
                name: string;
                subdomain: string;
                status: import("@prisma/client").$Enums.TenantStatus;
                customDomain: string | null;
            };
            requestedByUser: {
                id: string;
                name: string;
                email: string;
            } | null;
        } & {
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
        };
        tenant: {
            id: string;
            name: string;
            customDomain: string | null;
        };
        infraInstructions: {
            step1_customerDns: string;
            step2_adminIngress: string;
            note: string;
        };
    }>;
    reject(id: string, dto: RejectDomainRequestDto, admin: SystemAuthUser): Promise<{
        tenant: {
            id: string;
            name: string;
            subdomain: string;
            status: import("@prisma/client").$Enums.TenantStatus;
            customDomain: string | null;
        };
        requestedByUser: {
            id: string;
            name: string;
            email: string;
        } | null;
    } & {
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
