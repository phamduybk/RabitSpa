import { AuditAction, AuditActorType, AuditTargetType, Prisma } from '@prisma/client';
import { PrismaService } from '../../../common/prisma/prisma.service';
import { Paginated } from '../../../common/dto/pagination.dto';
import { AdminAuditLogQueryDto } from '../dto/audit-log-query.dto';
export declare class AdminAuditLogsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    log(params: {
        actorId: string;
        action: AuditAction;
        targetId: string;
        detail?: Prisma.InputJsonValue;
        actorType?: AuditActorType;
        targetType?: AuditTargetType;
    }): Promise<void>;
    list(query: AdminAuditLogQueryDto): Promise<Paginated<any>>;
}
