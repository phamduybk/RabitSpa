import type { Response } from 'express';
import { AuthUser } from '../../common/auth/jwt-payload';
import { CardReportsService } from './card-reports.service';
import { ReportMetaService } from './report-export.util';
export declare class CardReportsController {
    private readonly reports;
    private readonly meta;
    constructor(reports: CardReportsService, meta: ReportMetaService);
    cardUsage(t: string, _user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    private static readonly LOG_COLUMNS;
    private respondLog;
    private num;
}
