import type { Response } from 'express';
import { AuthUser } from '../../common/auth/jwt-payload';
import { InventoryReportsService } from './inventory-reports.service';
import { ReportMetaService } from './report-export.util';
export declare class InventoryReportsController {
    private readonly reports;
    private readonly meta;
    constructor(reports: InventoryReportsService, meta: ReportMetaService);
    movements(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    productsSold(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    stock(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    exportByStaff(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    batches(t: string, user: AuthUser, res: Response, q: Record<string, string>): Promise<void>;
    private num;
    private respond;
    private scope;
}
