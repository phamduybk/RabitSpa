import { PublicBookingService } from './public-booking.service';
declare class BookDto {
    tenant: string;
    branchId?: string;
    serviceId: string;
    operatorId?: string;
    startAt: string;
    customerName: string;
    customerMobile: string;
    note?: string;
}
export declare class PublicBookingController {
    private readonly booking;
    constructor(booking: PublicBookingService);
    info(tenant: string): Promise<{
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
        workingHours: import("./public-booking.service").WorkingDay[];
    }>;
    slots(tenant: string, date: string, serviceId: string, operatorId?: string): Promise<{
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
