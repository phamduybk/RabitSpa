import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../common/prisma/prisma.service';
import { Paginated } from '../../../common/dto/pagination.dto';
import { AdminDomainRequestQueryDto } from '../dto/domain-request-query.dto';
import { ApproveDomainRequestDto, RejectDomainRequestDto } from '../dto/domain-request-review.dto';
import { AdminAuditLogsService } from '../audit-logs/admin-audit-logs.service';
export declare class AdminDomainRequestsService {
    private readonly prisma;
    private readonly auditLogs;
    private readonly config;
    constructor(prisma: PrismaService, auditLogs: AdminAuditLogsService, config: ConfigService);
    private rootDomain;
    list(query: AdminDomainRequestQueryDto): Promise<Paginated<any>>;
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
    approve(id: string, adminId: string, dto: ApproveDomainRequestDto): Promise<{
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
    private approveSubdomain;
    private approveCustomDomain;
    reject(id: string, adminId: string, dto: RejectDomainRequestDto): Promise<{
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
