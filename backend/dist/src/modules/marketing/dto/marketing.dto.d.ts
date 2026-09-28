import { MessageChannel } from '@prisma/client';
export declare class SegmentCriteriaDto {
    rank?: string;
    hasBirthdayThisMonth?: boolean;
    hasDebt?: boolean;
    notVisitedDays?: number;
    source?: string;
    gender?: string;
}
export declare class CreateSegmentDto {
    name: string;
    description?: string;
    criteria: SegmentCriteriaDto;
}
export declare class UpdateSegmentDto {
    name?: string;
    description?: string;
    criteria?: SegmentCriteriaDto;
}
export declare class PreviewCriteriaDto {
    criteria: SegmentCriteriaDto;
    channel?: MessageChannel;
    content?: string;
}
export declare class CreateTemplateDto {
    channel: MessageChannel;
    name: string;
    content: string;
}
export declare class UpdateTemplateDto {
    channel?: MessageChannel;
    name?: string;
    content?: string;
}
export declare class CreateCampaignDto {
    name: string;
    channel: MessageChannel;
    segmentId?: string;
    templateId?: string;
    scheduledAt?: string;
}
export declare class UpdateCampaignDto {
    name?: string;
    channel?: MessageChannel;
    segmentId?: string;
    templateId?: string;
    scheduledAt?: string;
}
export declare class QueryLogsDto {
    campaignId?: string;
    channel?: MessageChannel;
    from?: string;
    to?: string;
    page?: number;
    pageSize?: number;
}
