import { DomainRequestStatus } from '@prisma/client';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto';
export declare class AdminDomainRequestQueryDto extends PaginationQueryDto {
    status?: DomainRequestStatus;
}
