import { AppointmentSource, AppointmentStatus } from '@prisma/client';
export declare class AppointmentItemDto {
    serviceId: string;
    operatorId?: string;
    startAt: string;
}
export declare class CreateAppointmentDto {
    customerId?: string;
    branchId?: string;
    source?: AppointmentSource;
    items: AppointmentItemDto[];
    note?: string;
    guestCount?: number;
    resourceName?: string;
    resourceId?: string;
}
export declare class AssignResourceDto {
    resourceId?: string | null;
}
export declare class UpdateStatusDto {
    status: AppointmentStatus;
    reason?: string;
}
export declare class MarkReminderDto {
    channel: 'SMS' | 'ZALO';
}
