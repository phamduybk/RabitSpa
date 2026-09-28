import { MessageChannel } from '@prisma/client';
import { AuthUser } from '../../common/auth/jwt-payload';
import { MarketingService } from './marketing.service';
import { CreateCampaignDto, CreateSegmentDto, CreateTemplateDto, PreviewCriteriaDto, QueryLogsDto, UpdateCampaignDto, UpdateSegmentDto, UpdateTemplateDto } from './dto/marketing.dto';
export declare class MarketingController {
    private readonly marketing;
    constructor(marketing: MarketingService);
    variables(): {
        key: string;
        label: string;
    }[];
    stats(t: string): Promise<{
        totalCampaigns: number;
        totalSent: number;
        totalCost: number;
        byChannel: {
            channel: import("@prisma/client").$Enums.MessageChannel;
            count: number;
            cost: number;
        }[];
    }>;
    listSegments(t: string): Promise<{
        recipientCount: number;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        description: string | null;
        criteria: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
    createSegment(t: string, dto: CreateSegmentDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        description: string | null;
        criteria: import("@prisma/client/runtime/library").JsonValue;
    }>;
    updateSegment(t: string, id: string, dto: UpdateSegmentDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        description: string | null;
        criteria: import("@prisma/client/runtime/library").JsonValue;
    }>;
    removeSegment(t: string, id: string): Promise<{
        success: true;
    }>;
    previewSegment(t: string, id: string, channel?: MessageChannel): Promise<{
        channel: import("@prisma/client").$Enums.MessageChannel;
        unitPrice: number;
        messageParts: number;
        recipientCount: number;
        estimatedCost: number;
        sample: {
            id: string;
            code: string;
            fullName: string;
            mobile: string;
            rank: string;
        }[];
    }>;
    preview(t: string, dto: PreviewCriteriaDto): Promise<{
        channel: import("@prisma/client").$Enums.MessageChannel;
        unitPrice: number;
        messageParts: number;
        recipientCount: number;
        estimatedCost: number;
        sample: {
            id: string;
            code: string;
            fullName: string;
            mobile: string;
            rank: string;
        }[];
    }>;
    listTemplates(t: string, channel?: MessageChannel): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        channel: import("@prisma/client").$Enums.MessageChannel;
        content: string;
    }[]>;
    createTemplate(t: string, dto: CreateTemplateDto): import("@prisma/client").Prisma.Prisma__MessageTemplateClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        channel: import("@prisma/client").$Enums.MessageChannel;
        content: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateTemplate(t: string, id: string, dto: UpdateTemplateDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        channel: import("@prisma/client").$Enums.MessageChannel;
        content: string;
    }>;
    removeTemplate(t: string, id: string): Promise<{
        success: true;
    }>;
    listCampaigns(t: string): Promise<({
        template: {
            id: string;
            name: string;
            channel: import("@prisma/client").$Enums.MessageChannel;
        } | null;
        segment: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        name: string;
        status: import("@prisma/client").$Enums.CampaignStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        createdById: string | null;
        templateId: string | null;
        channel: import("@prisma/client").$Enums.MessageChannel;
        segmentId: string | null;
        scheduledAt: Date | null;
        sentAt: Date | null;
        recipientCount: number;
        messageCount: number;
        estimatedCost: bigint;
    })[]>;
    getCampaign(t: string, id: string): Promise<{
        preview: {
            channel: import("@prisma/client").$Enums.MessageChannel;
            unitPrice: number;
            messageParts: number;
            recipientCount: number;
            estimatedCost: number;
            sample: {
                id: string;
                code: string;
                fullName: string;
                mobile: string;
                rank: string;
            }[];
        } | null;
        template: {
            id: string;
            name: string;
            channel: import("@prisma/client").$Enums.MessageChannel;
            content: string;
        } | null;
        segment: {
            id: string;
            name: string;
            criteria: import("@prisma/client/runtime/library").JsonValue;
        } | null;
        id: string;
        name: string;
        status: import("@prisma/client").$Enums.CampaignStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        createdById: string | null;
        templateId: string | null;
        channel: import("@prisma/client").$Enums.MessageChannel;
        segmentId: string | null;
        scheduledAt: Date | null;
        sentAt: Date | null;
        recipientCount: number;
        messageCount: number;
        estimatedCost: bigint;
    }>;
    createCampaign(t: string, user: AuthUser, dto: CreateCampaignDto): Promise<{
        id: string;
        name: string;
        status: import("@prisma/client").$Enums.CampaignStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        createdById: string | null;
        templateId: string | null;
        channel: import("@prisma/client").$Enums.MessageChannel;
        segmentId: string | null;
        scheduledAt: Date | null;
        sentAt: Date | null;
        recipientCount: number;
        messageCount: number;
        estimatedCost: bigint;
    }>;
    updateCampaign(t: string, id: string, dto: UpdateCampaignDto): Promise<{
        id: string;
        name: string;
        status: import("@prisma/client").$Enums.CampaignStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        createdById: string | null;
        templateId: string | null;
        channel: import("@prisma/client").$Enums.MessageChannel;
        segmentId: string | null;
        scheduledAt: Date | null;
        sentAt: Date | null;
        recipientCount: number;
        messageCount: number;
        estimatedCost: bigint;
    }>;
    removeCampaign(t: string, id: string): Promise<{
        success: true;
    }>;
    sendCampaign(t: string, id: string): Promise<{
        success: true;
        campaignId: string;
        recipientCount: number;
        failedCount: number;
        messageCount: number;
        totalCost: number;
    }>;
    listLogs(t: string, q: QueryLogsDto): Promise<{
        summary: {
            total: number;
            sent: number;
            failed: number;
            totalCost: number;
        };
        rows: {
            id: string;
            campaignId: string | null;
            campaignCode: string | null;
            campaignName: string | null;
            customerName: string;
            recipient: string;
            channel: import("@prisma/client").$Enums.MessageChannel;
            content: string;
            status: import("@prisma/client").$Enums.MessageStatus;
            cost: number;
            messageParts: number;
            error: string | null;
            sentAt: Date;
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
    }>;
}
