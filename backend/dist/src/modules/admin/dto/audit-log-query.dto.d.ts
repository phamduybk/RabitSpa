import { AuditAction } from '@prisma/client';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto';
export declare class AdminAuditLogQueryDto extends PaginationQueryDto {
    action?: AuditAction;
    tenantId?: string;
}
