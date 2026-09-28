import { CustomersService } from './customers.service';
import { CreateCustomerDto, CreateCustomerNoteDto, CreateCustomerPhotoDto, CreateCustomerTagDto, CustomerQueryDto, UpdateCustomerDto, SetCustomerTagsDto } from './dto/customer.dto';
export declare class CustomersController {
    private readonly customers;
    constructor(customers: CustomersService);
    create(tenantId: string, dto: CreateCustomerDto): Promise<{
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
    }>;
    findAll(tenantId: string, query: CustomerQueryDto): Promise<import("../../common/dto/pagination.dto").Paginated<{
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
    }>>;
    tags(tenantId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        tenantId: string;
        color: string;
    }[]>;
    createTag(tenantId: string, dto: CreateCustomerTagDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        tenantId: string;
        color: string;
    }>;
    removeTag(tenantId: string, tagId: string): Promise<{
        success: boolean;
    }>;
    findOne(tenantId: string, id: string): Promise<{
        tagLinks: ({
            tag: {
                id: string;
                name: string;
                createdAt: Date;
                tenantId: string;
                color: string;
            };
        } & {
            customerId: string;
            tagId: string;
        })[];
    } & {
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
    }>;
    setTags(tenantId: string, id: string, dto: SetCustomerTagsDto): Promise<{
        tagLinks: ({
            tag: {
                id: string;
                name: string;
                createdAt: Date;
                tenantId: string;
                color: string;
            };
        } & {
            customerId: string;
            tagId: string;
        })[];
    } & {
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
    }>;
    history(tenantId: string, id: string): Promise<{
        invoices: {
            id: string;
            status: import("@prisma/client").$Enums.InvoiceStatus;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            code: string;
            deletedAt: Date | null;
            debtAmount: bigint;
            note: string | null;
            branchId: string;
            customerId: string | null;
            appointmentId: string | null;
            voucherId: string | null;
            idempotencyKey: string | null;
            requestHash: string | null;
            subtotal: bigint;
            discountType: import("@prisma/client").$Enums.DiscountType | null;
            discountValue: bigint;
            tipAmount: bigint;
            taxAmount: bigint;
            serviceCharge: bigint;
            loyaltyAwarded: number;
            total: bigint;
            paidAmount: bigint;
            createdById: string | null;
            canceledById: string | null;
            canceledReason: string | null;
            paidAt: Date | null;
        }[];
        totalSpent: number;
        lastVisit: Date | null;
    }>;
    notes(tenantId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        customerId: string;
        content: string;
    }[]>;
    addNote(tenantId: string, id: string, dto: CreateCustomerNoteDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        customerId: string;
        content: string;
    }>;
    removeNote(tenantId: string, id: string, noteId: string): Promise<{
        success: boolean;
    }>;
    photos(tenantId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        customerId: string;
        dataUrl: string;
        caption: string | null;
        tag: string | null;
    }[]>;
    addPhoto(tenantId: string, id: string, dto: CreateCustomerPhotoDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        customerId: string;
        dataUrl: string;
        caption: string | null;
        tag: string | null;
    }>;
    removePhoto(tenantId: string, id: string, photoId: string): Promise<{
        success: boolean;
    }>;
    update(tenantId: string, id: string, dto: UpdateCustomerDto): Promise<{
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
    }>;
    remove(tenantId: string, id: string): Promise<{
        success: boolean;
    }>;
}
