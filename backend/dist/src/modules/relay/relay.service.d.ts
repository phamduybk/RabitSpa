import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../common/prisma/prisma.service';
export declare class RelayService {
    private readonly prisma;
    private readonly config;
    constructor(prisma: PrismaService, config: ConfigService);
    private rootDomain;
    isAllowedHostname(domainRaw: string): Promise<boolean>;
    listApprovedCustomDomains(): Promise<{
        domain: string;
        origin: string;
    }[]>;
    checkSecret(given: string | undefined): boolean;
}
