import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateSurveyDto, PublicSubmitDto, QuerySurveyDto, SubmitResponseDto, UpdateSurveyDto } from './dto/survey.dto';
export declare class SurveyService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private normalizeOptions;
    private optionsOf;
    private dateRange;
    listSurveys(tenantId: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        active: boolean;
        questionCount: number;
        responseCount: number;
        createdAt: Date;
    }[]>;
    getSurvey(tenantId: string, id: string): Promise<{
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
    private buildQuestionCreateData;
    createSurvey(tenantId: string, dto: CreateSurveyDto): Promise<{
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
    updateSurvey(tenantId: string, id: string, dto: UpdateSurveyDto): Promise<{
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
    deleteSurvey(tenantId: string, id: string): Promise<{
        ok: boolean;
    }>;
    private doSubmit;
    submitResponse(tenantId: string, surveyId: string, dto: SubmitResponseDto): Promise<{
        id: string;
        ok: boolean;
    }>;
    listResponses(tenantId: string, surveyId: string, q: QuerySurveyDto): Promise<{
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
    report(tenantId: string, surveyId: string, q: QuerySurveyDto): Promise<{
        survey: {
            id: string;
            name: string;
            active: boolean;
        };
        kpis: {
            responseCount: number;
            questionCount: number;
            overallAvg: number;
        };
        questions: ({
            avgScore: number;
            distribution: {
                label: string;
                count: number;
            }[];
            id: string;
            content: string;
            type: import("@prisma/client").$Enums.SurveyQuestionType;
            required: boolean;
            answerCount: number;
        } | {
            avgScore: null;
            distribution: never[];
            texts: string[];
            id: string;
            content: string;
            type: import("@prisma/client").$Enums.SurveyQuestionType;
            required: boolean;
            answerCount: number;
        } | {
            avgScore: null;
            distribution: {
                label: string;
                count: number;
            }[];
            id: string;
            content: string;
            type: import("@prisma/client").$Enums.SurveyQuestionType;
            required: boolean;
            answerCount: number;
        })[];
    }>;
    reportRows(tenantId: string, surveyId: string, q: QuerySurveyDto): Promise<{
        rows: Record<string, unknown>[];
        kpis: {
            responseCount: number;
            questionCount: number;
            overallAvg: number;
        };
        survey: {
            id: string;
            name: string;
            active: boolean;
        };
    }>;
    private resolveTenant;
    getPublicSurvey(subdomain: string, surveyId: string): Promise<{
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
    publicSubmit(dto: PublicSubmitDto): Promise<{
        id: string;
        ok: boolean;
    }>;
}
