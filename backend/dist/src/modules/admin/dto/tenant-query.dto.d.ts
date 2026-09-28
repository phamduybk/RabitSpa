import { PlanCode, TenantStatus } from '@prisma/client';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto';
export declare class AdminTenantQueryDto extends PaginationQueryDto {
    status?: TenantStatus;
    plan?: PlanCode;
}
