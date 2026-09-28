import { AppointmentStatus } from '@prisma/client';
import { AuthUser } from '../../common/auth/jwt-payload';
import { AppointmentsService } from './appointments.service';
import { AssignResourceDto, CreateAppointmentDto, MarkReminderDto, UpdateStatusDto } from './dto/appointment.dto';
export declare class AppointmentsController {
    private readonly appointments;
    constructor(appointments: AppointmentsService);
    find(t: string, user: AuthUser, from?: string, to?: string, branchId?: string, operatorId?: string, resourceId?: string, resourceName?: string, q?: string, unreminded?: string, status?: AppointmentStatus): Promise<({
        customer: {
            id: string;
            fullName: string;
            mobile: string;
        } | null;
        items: ({
            service: {
                id: string;
                name: string;
            };
            operator: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            durationMinutes: number;
            appointmentId: string;
            operatorId: string | null;
            startAt: Date;
            endAt: Date;
            priceSnapshot: bigint;
            serviceId: string;
        })[];
        resource: {
            id: string;
            name: string;
            type: import("@prisma/client").$Enums.ResourceType;
        } | null;
    } & {
        id: string;
        status: import("@prisma/client").$Enums.AppointmentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        deletedAt: Date | null;
        note: string | null;
        source: import("@prisma/client").$Enums.AppointmentSource;
        branchId: string;
        customerId: string | null;
        canceledReason: string | null;
        startAt: Date;
        endAt: Date;
        guestCount: number;
        resourceName: string | null;
        resourceId: string | null;
        reminderSentAt: Date | null;
        reminderChannel: string | null;
    })[]>;
    create(t: string, user: AuthUser, dto: CreateAppointmentDto): Promise<{
        items: {
            id: string;
            durationMinutes: number;
            appointmentId: string;
            operatorId: string | null;
            startAt: Date;
            endAt: Date;
            priceSnapshot: bigint;
            serviceId: string;
        }[];
    } & {
        id: string;
        status: import("@prisma/client").$Enums.AppointmentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        deletedAt: Date | null;
        note: string | null;
        source: import("@prisma/client").$Enums.AppointmentSource;
        branchId: string;
        customerId: string | null;
        canceledReason: string | null;
        startAt: Date;
        endAt: Date;
        guestCount: number;
        resourceName: string | null;
        resourceId: string | null;
        reminderSentAt: Date | null;
        reminderChannel: string | null;
    }>;
    update(t: string, user: AuthUser, id: string, dto: CreateAppointmentDto): Promise<{
        customer: {
            id: string;
            address: string | null;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            code: string;
            deletedAt: Date | null;
            fullName: string;
            nameNormalized: string | null;
            mobile: string;
            email: string | null;
            zalo: string | null;
            gender: import("@prisma/client").$Enums.Gender | null;
            avatarColor: string | null;
            provinceName: string | null;
            districtName: string | null;
            dobDate: number | null;
            dobMonth: number | null;
            dobYear: number | null;
            rank: string;
            loyaltyPoint: number;
            debtAmount: bigint;
            note: string | null;
            source: import("@prisma/client").$Enums.CustomerSource;
        } | null;
        items: ({
            service: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                categoryId: string | null;
                code: string | null;
                price: bigint;
                durationMinutes: number;
                description: string | null;
                imageUrl: string | null;
                isActive: boolean;
                deletedAt: Date | null;
            };
            operator: {
                id: string;
                name: string;
                phone: string | null;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                isActive: boolean;
                deletedAt: Date | null;
                email: string | null;
                avatarColor: string | null;
                branchId: string;
                userId: string | null;
                title: string | null;
                level: number;
                avatarUrl: string | null;
                isGroup: boolean;
                showInPublicBooking: boolean;
                basicSalary: bigint;
                basicSalaryType: import("@prisma/client").$Enums.SalaryType;
                startDate: Date | null;
            } | null;
        } & {
            id: string;
            durationMinutes: number;
            appointmentId: string;
            operatorId: string | null;
            startAt: Date;
            endAt: Date;
            priceSnapshot: bigint;
            serviceId: string;
        })[];
    } & {
        id: string;
        status: import("@prisma/client").$Enums.AppointmentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        deletedAt: Date | null;
        note: string | null;
        source: import("@prisma/client").$Enums.AppointmentSource;
        branchId: string;
        customerId: string | null;
        canceledReason: string | null;
        startAt: Date;
        endAt: Date;
        guestCount: number;
        resourceName: string | null;
        resourceId: string | null;
        reminderSentAt: Date | null;
        reminderChannel: string | null;
    }>;
    findOne(t: string, user: AuthUser, id: string): Promise<{
        customer: {
            id: string;
            address: string | null;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            code: string;
            deletedAt: Date | null;
            fullName: string;
            nameNormalized: string | null;
            mobile: string;
            email: string | null;
            zalo: string | null;
            gender: import("@prisma/client").$Enums.Gender | null;
            avatarColor: string | null;
            provinceName: string | null;
            districtName: string | null;
            dobDate: number | null;
            dobMonth: number | null;
            dobYear: number | null;
            rank: string;
            loyaltyPoint: number;
            debtAmount: bigint;
            note: string | null;
            source: import("@prisma/client").$Enums.CustomerSource;
        } | null;
        items: ({
            service: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                categoryId: string | null;
                code: string | null;
                price: bigint;
                durationMinutes: number;
                description: string | null;
                imageUrl: string | null;
                isActive: boolean;
                deletedAt: Date | null;
            };
            operator: {
                id: string;
                name: string;
                phone: string | null;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                isActive: boolean;
                deletedAt: Date | null;
                email: string | null;
                avatarColor: string | null;
                branchId: string;
                userId: string | null;
                title: string | null;
                level: number;
                avatarUrl: string | null;
                isGroup: boolean;
                showInPublicBooking: boolean;
                basicSalary: bigint;
                basicSalaryType: import("@prisma/client").$Enums.SalaryType;
                startDate: Date | null;
            } | null;
        } & {
            id: string;
            durationMinutes: number;
            appointmentId: string;
            operatorId: string | null;
            startAt: Date;
            endAt: Date;
            priceSnapshot: bigint;
            serviceId: string;
        })[];
        resource: {
            id: string;
            name: string;
            type: import("@prisma/client").$Enums.ResourceType;
        } | null;
        invoice: {
            id: string;
            status: import("@prisma/client").$Enums.InvoiceStatus;
            code: string;
            debtAmount: bigint;
            total: bigint;
            paidAmount: bigint;
        } | null;
    } & {
        id: string;
        status: import("@prisma/client").$Enums.AppointmentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        deletedAt: Date | null;
        note: string | null;
        source: import("@prisma/client").$Enums.AppointmentSource;
        branchId: string;
        customerId: string | null;
        canceledReason: string | null;
        startAt: Date;
        endAt: Date;
        guestCount: number;
        resourceName: string | null;
        resourceId: string | null;
        reminderSentAt: Date | null;
        reminderChannel: string | null;
    }>;
    assignResource(t: string, user: AuthUser, id: string, dto: AssignResourceDto): Promise<{
        customer: {
            id: string;
            fullName: string;
            mobile: string;
        } | null;
        items: ({
            service: {
                id: string;
                name: string;
            };
            operator: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            durationMinutes: number;
            appointmentId: string;
            operatorId: string | null;
            startAt: Date;
            endAt: Date;
            priceSnapshot: bigint;
            serviceId: string;
        })[];
        resource: {
            id: string;
            name: string;
            type: import("@prisma/client").$Enums.ResourceType;
        } | null;
    } & {
        id: string;
        status: import("@prisma/client").$Enums.AppointmentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        deletedAt: Date | null;
        note: string | null;
        source: import("@prisma/client").$Enums.AppointmentSource;
        branchId: string;
        customerId: string | null;
        canceledReason: string | null;
        startAt: Date;
        endAt: Date;
        guestCount: number;
        resourceName: string | null;
        resourceId: string | null;
        reminderSentAt: Date | null;
        reminderChannel: string | null;
    }>;
    updateStatus(t: string, user: AuthUser, id: string, dto: UpdateStatusDto): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.AppointmentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        deletedAt: Date | null;
        note: string | null;
        source: import("@prisma/client").$Enums.AppointmentSource;
        branchId: string;
        customerId: string | null;
        canceledReason: string | null;
        startAt: Date;
        endAt: Date;
        guestCount: number;
        resourceName: string | null;
        resourceId: string | null;
        reminderSentAt: Date | null;
        reminderChannel: string | null;
    }>;
    markReminder(t: string, user: AuthUser, id: string, dto: MarkReminderDto): Promise<{
        customer: {
            id: string;
            address: string | null;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            code: string;
            deletedAt: Date | null;
            fullName: string;
            nameNormalized: string | null;
            mobile: string;
            email: string | null;
            zalo: string | null;
            gender: import("@prisma/client").$Enums.Gender | null;
            avatarColor: string | null;
            provinceName: string | null;
            districtName: string | null;
            dobDate: number | null;
            dobMonth: number | null;
            dobYear: number | null;
            rank: string;
            loyaltyPoint: number;
            debtAmount: bigint;
            note: string | null;
            source: import("@prisma/client").$Enums.CustomerSource;
        } | null;
    } & {
        id: string;
        status: import("@prisma/client").$Enums.AppointmentStatus;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        code: string;
        deletedAt: Date | null;
        note: string | null;
        source: import("@prisma/client").$Enums.AppointmentSource;
        branchId: string;
        customerId: string | null;
        canceledReason: string | null;
        startAt: Date;
        endAt: Date;
        guestCount: number;
        resourceName: string | null;
        resourceId: string | null;
        reminderSentAt: Date | null;
        reminderChannel: string | null;
    }>;
    remove(t: string, user: AuthUser, id: string): Promise<{
        success: boolean;
    }>;
}
