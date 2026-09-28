import { DomainRequestType } from '@prisma/client';
export declare class CreateDomainRequestDto {
    type: DomainRequestType;
    requestedSubdomain?: string;
    customDomain?: string;
    reason?: string;
}
