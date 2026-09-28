import type { Response } from 'express';
import { ReportMetaService } from '../reports/report-export.util';
import { SurveyService } from './survey.service';
import { CreateSurveyDto, PublicSubmitDto, QuerySurveyDto, SubmitResponseDto, UpdateSurveyDto } from './dto/survey.dto';
export declare class SurveyController {
    private readonly survey;
    private readonly meta;
    constructor(survey: SurveyService, meta: ReportMetaService);
    list(t: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        active: boolean;
        questionCount: number;
        responseCount: number;
        createdAt: Date;
    }[]>;
    create(t: string, dto: CreateSurveyDto): Promise<{
        id: string;
        name: string;
        description: string | null;
        active: boolean;
        responseCount: number;
        createdAt: Date;
        questions: {
            id: string;
            content: string;
            type: import("@prisma/client").$Enums.SurveyQuestionType;
            options: string[];
            orderIndex: number;
            required: boolean;
        }[];
    }>;
    detail(t: string, id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        active: boolean;
        responseCount: number;
        createdAt: Date;
        questions: {
            id: string;
            content: string;
            type: import("@prisma/client").$Enums.SurveyQuestionType;
            options: string[];
            orderIndex: number;
            required: boolean;
        }[];
    }>;
    update(t: string, id: string, dto: UpdateSurveyDto): Promise<{
        id: string;
        name: string;
        description: string | null;
        active: boolean;
        responseCount: number;
        createdAt: Date;
        questions: {
            id: string;
            content: string;
            type: import("@prisma/client").$Enums.SurveyQuestionType;
            options: string[];
            orderIndex: number;
            required: boolean;
        }[];
    }>;
    remove(t: string, id: string): Promise<{
        ok: boolean;
    }>;
    responses(t: string, id: string, q: QuerySurveyDto): Promise<{
        rows: {
            id: string;
            customerName: string;
            customerMobile: string;
            createdAt: Date;
            answers: {
                question: string;
                type: import("@prisma/client").$Enums.SurveyQuestionType;
                valueScore: number | null;
                valueText: string | null;
                valueOptions: string[];
            }[];
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
    }>;
    submit(t: string, id: string, dto: SubmitResponseDto): Promise<{
        id: string;
        ok: boolean;
    }>;
    report(t: string, id: string, res: Response, q: QuerySurveyDto): Promise<void>;
}
export declare class PublicSurveyController {
    private readonly survey;
    constructor(survey: SurveyService);
    info(tenant: string, survey: string): Promise<{
        tenant: {
            name: string;
            address: string | null;
        };
        survey: {
            id: string;
            name: string;
            description: string | null;
            questions: {
                id: string;
                content: string;
                type: import("@prisma/client").$Enums.SurveyQuestionType;
                options: string[];
                required: boolean;
            }[];
        };
    }>;
    submit(dto: PublicSubmitDto): Promise<{
        id: string;
        ok: boolean;
    }>;
}
