import { MessageChannel, Prisma } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CounterService } from '../../common/tenant/counter.service';
import { CreateCampaignDto, CreateSegmentDto, CreateTemplateDto, PreviewCriteriaDto, QueryLogsDto, UpdateCampaignDto, UpdateSegmentDto, UpdateTemplateDto } from './dto/marketing.dto';
export declare const TEMPLATE_VARIABLES: {
    key: string;
    label: string;
}[];
export declare class MarketingService {
    private readonly prisma;
    private readonly counter;
    constructor(prisma: PrismaService, counter: CounterService);
    private getUnitPrices;
    private messageParts;
    private costPerRecipient;
    private buildCustomerWhere;
    private countRecipients;
    private recipients;
    private render;
    listSegments(tenantId: string): Promise<{
        recipientCount: number;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        description: string | null;
        criteria: Prisma.JsonValue;
    }[]>;
    createSegment(tenantId: string, dto: CreateSegmentDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        description: string | null;
        criteria: Prisma.JsonValue;
    }>;
    updateSegment(tenantId: string, id: string, dto: UpdateSegmentDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        description: string | null;
        criteria: Prisma.JsonValue;
    }>;
    removeSegment(tenantId: string, id: string): Promise<{
        success: true;
    }>;
    private ensureSegment;
    previewByCriteria(tenantId: string, dto: PreviewCriteriaDto): Promise<{
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
    previewBySegment(tenantId: string, segmentId: string, channel?: MessageChannel, content?: string): Promise<{
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
    private buildPreview;
    variables(): {
        key: string;
        label: string;
    }[];
    listTemplates(tenantId: string, channel?: MessageChannel): Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        channel: import("@prisma/client").$Enums.MessageChannel;
        content: string;
    }[]>;
    createTemplate(tenantId: string, dto: CreateTemplateDto): Prisma.Prisma__MessageTemplateClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        channel: import("@prisma/client").$Enums.MessageChannel;
        content: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateTemplate(tenantId: string, id: string, dto: UpdateTemplateDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        channel: import("@prisma/client").$Enums.MessageChannel;
        content: string;
    }>;
    removeTemplate(tenantId: string, id: string): Promise<{
        success: true;
    }>;
    private ensureTemplate;
    listCampaigns(tenantId: string): Promise<({
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
    getCampaign(tenantId: string, id: string): Promise<{
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
            criteria: Prisma.JsonValue;
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
    createCampaign(tenantId: string, userId: string | undefined, dto: CreateCampaignDto): Promise<{
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
    updateCampaign(tenantId: string, id: string, dto: UpdateCampaignDto): Promise<{
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
    removeCampaign(tenantId: string, id: string): Promise<{
        success: true;
    }>;
    sendCampaign(tenantId: string, id: string): Promise<{
        success: true;
        campaignId: string;
        recipientCount: number;
        failedCount: number;
        messageCount: number;
        totalCost: number;
    }>;
    listLogs(tenantId: string, q: QueryLogsDto): Promise<{
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
    stats(tenantId: string): Promise<{
        totalCampaigns: number;
        totalSent: number;
        totalCost: number;
        byChannel: {
            channel: import("@prisma/client").$Enums.MessageChannel;
            count: number;
            cost: number;
        }[];
    }>;
}
