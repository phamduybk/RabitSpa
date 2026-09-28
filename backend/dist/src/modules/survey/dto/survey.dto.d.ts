import { SurveyQuestionType } from '@prisma/client';
export declare class SurveyQuestionDto {
    id?: string;
    content: string;
    type: SurveyQuestionType;
    options?: string[];
    orderIndex?: number;
    required?: boolean;
}
export declare class CreateSurveyDto {
    name: string;
    description?: string;
    active?: boolean;
    questions?: SurveyQuestionDto[];
}
export declare class UpdateSurveyDto {
    name?: string;
    description?: string;
    active?: boolean;
    questions?: SurveyQuestionDto[];
}
export declare class SubmitAnswerDto {
    questionId: string;
    valueScore?: number;
    valueText?: string;
    valueOptions?: string[];
}
export declare class SubmitResponseDto {
    customerId?: string;
    invoiceId?: string;
    answers: SubmitAnswerDto[];
}
export declare class PublicSubmitDto extends SubmitResponseDto {
    tenant: string;
    surveyId: string;
}
export declare class QuerySurveyDto {
    from?: string;
    to?: string;
    format?: string;
    page?: number;
    pageSize?: number;
}
