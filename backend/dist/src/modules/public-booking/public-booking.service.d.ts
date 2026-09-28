import { PrismaService } from '../../common/prisma/prisma.service';
import { CounterService } from '../../common/tenant/counter.service';
export interface WorkingDay {
    day: number;
    open: boolean;
    from: string;
    to: string;
}
interface BookDto {
    tenant: string;
    branchId?: string;
    serviceId: string;
    operatorId?: string;
    startAt: string;
    customerName: string;
    customerMobile: string;
    note?: string;
}
interface SlotQuery {
    tenant: string;
    date: string;
    serviceId: string;
    operatorId?: string;
}
export declare class PublicBookingService {
    private readonly prisma;
    private readonly counter;
    constructor(prisma: PrismaService, counter: CounterService);
    private resolveTenant;
    private getWorkingDays;
    private getBookingConfig;
    private toMinute;
    private weekdayIndex;
    getInfo(subdomain: string): Promise<{
        tenant: {
            name: string;
            businessType: import("@prisma/client").$Enums.BusinessType;
            phone: string | null;
            address: string | null;
            logoUrl: string | null;
        };
        enabled: boolean;
        branches: {
            id: string;
            name: string;
            phone: string | null;
            address: string | null;
            isDefault: boolean;
        }[];
        services: {
            id: string;
            name: string;
            categoryId: string | null;
            price: bigint;
            durationMinutes: number;
            description: string | null;
        }[];
        operators: {
            id: string;
            name: string;
            avatarColor: string | null;
            title: string | null;
            avatarUrl: string | null;
        }[];
        workingHours: WorkingDay[];
    }>;
    getSlots(query: SlotQuery): Promise<{
        date: string;
        slots: {
            start: string;
            time: string;
        }[];
    }>;
    book(dto: BookDto): Promise<{
        code: string;
        startAt: Date;
        serviceName: string;
    }>;
}
export {};
