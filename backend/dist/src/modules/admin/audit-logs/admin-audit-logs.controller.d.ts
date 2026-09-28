import { AdminAuditLogsService } from './admin-audit-logs.service';
import { AdminAuditLogQueryDto } from '../dto/audit-log-query.dto';
export declare class AdminAuditLogsController {
    private readonly service;
    constructor(service: AdminAuditLogsService);
    list(query: AdminAuditLogQueryDto): Promise<import("../../../common/dto/pagination.dto").Paginated<any>>;
}
