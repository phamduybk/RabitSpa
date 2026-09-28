import { AppointmentStatus } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CounterService } from '../../common/tenant/counter.service';
import { CreateAppointmentDto, UpdateStatusDto } from './dto/appointment.dto';
export declare class AppointmentsService {
    private readonly prisma;
    private readonly counter;
    constructor(prisma: PrismaService, counter: CounterService);
    find(tenantId: string, params: {
        from?: string;
        to?: string;
        branchId?: string;
        operatorId?: string;
        resourceId?: string;
        status?: AppointmentStatus;
        resourceName?: string;
        q?: string;
        unreminded?: boolean;
    }, branchIds?: string[]): Promise<({
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
    findOne(tenantId: string, id: string, branchIds?: string[]): Promise<{
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
    create(tenantId: string, dto: CreateAppointmentDto, branchIds?: string[]): Promise<{
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
    update(tenantId: string, id: string, dto: CreateAppointmentDto, branchIds?: string[]): Promise<{
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
    updateStatus(tenantId: string, id: string, dto: UpdateStatusDto, branchIds?: string[]): Promise<{
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
    remove(tenantId: string, id: string, branchIds?: string[]): Promise<{
        success: boolean;
    }>;
    markReminder(tenantId: string, id: string, channel: 'SMS' | 'ZALO', branchIds?: string[]): Promise<{
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
    assignResource(tenantId: string, id: string, resourceId: string | null | undefined, branchIds?: string[]): Promise<{
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
    private resolveResource;
    private assertResourceFree;
    private assertOperatorFree;
    private defaultBranchId;
}
