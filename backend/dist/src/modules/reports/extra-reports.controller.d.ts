import type { Response } from 'express';
import { AuthUser } from '../../common/auth/jwt-payload';
import { ExtraReportsService } from './extra-reports.service';
import { ReportsService } from './reports.service';
import { ReportMetaService } from './report-export.util';
export declare class ExtraReportsController {
    private readonly reports;
    private readonly legacyReports;
    private readonly meta;
    constructor(reports: ExtraReportsService, legacyReports: ReportsService, meta: ReportMetaService);
    salesByItem(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    byBranch(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    customerStats(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    bookingStats(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    usageByCustomer(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    serviceConsumptionCost(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    private num;
    private respond;
    private scope;
}
