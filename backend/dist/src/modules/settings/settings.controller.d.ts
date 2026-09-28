import { RoleName } from '@prisma/client';
import { AuthUser } from '../../common/auth/jwt-payload';
import { OrgService } from './org.service';
import { PermissionsService } from './permissions.service';
import { SettingsService } from './settings.service';
export declare class SettingsController {
    private readonly settings;
    private readonly org;
    private readonly permissions;
    constructor(settings: SettingsService, org: OrgService, permissions: PermissionsService);
    myPermissions(t: string, user: AuthUser): Promise<{
        isOwner: boolean;
        modules: ("customers" | "appointments" | "settings" | "surveys" | "inventory" | "pos" | "reports" | "marketing" | "staff" | "permissions")[];
    }>;
    getPermissions(t: string): Promise<{
        modules: readonly ["appointments", "pos", "customers", "reports", "inventory", "marketing", "surveys", "staff", "settings", "permissions"];
        roles: import("@prisma/client").$Enums.RoleName[];
        ownerRole: "OWNER";
        matrix: {
            OWNER: Record<string, boolean>;
        };
    }>;
    updatePermissions(t: string, dto: {
        matrix?: any;
    }): Promise<{
        modules: readonly ["appointments", "pos", "customers", "reports", "inventory", "marketing", "surveys", "staff", "settings", "permissions"];
        roles: import("@prisma/client").$Enums.RoleName[];
        ownerRole: "OWNER";
        matrix: {
            OWNER: Record<string, boolean>;
        };
    }>;
    getStore(t: string): Promise<{
        info: {
            name: string;
            subdomain: string;
            businessType: import("@prisma/client").$Enums.BusinessType;
            phone: string | null;
            address: string | null;
            province: string | null;
            district: string | null;
            logoUrl: string | null;
        } | null;
        config: any;
    }>;
    updateStore(t: string, dto: {
        info?: any;
        config?: any;
    }): Promise<{
        info: {
            name: string;
            subdomain: string;
            businessType: import("@prisma/client").$Enums.BusinessType;
            phone: string | null;
            address: string | null;
            province: string | null;
            district: string | null;
            logoUrl: string | null;
        } | null;
        config: any;
    }>;
    getLoyalty(t: string): Promise<any>;
    updateLoyalty(t: string, dto: any): Promise<any>;
    getBilling(t: string): Promise<any>;
    updateBilling(t: string, dto: any): Promise<any>;
    getWorkingHours(t: string): Promise<any>;
    updateWorkingHours(t: string, dto: any): Promise<any>;
    getPublicBooking(t: string): Promise<any>;
    updatePublicBooking(t: string, dto: {
        enabled?: boolean;
    }): Promise<any>;
    exportData(t: string, user: AuthUser): Promise<{
        format: string;
        version: number;
        exportedAt: string;
        tenant: {
            name: string;
            subdomain: string;
            phone: string | null;
            address: string | null;
        } | null;
        counts: {
            [k: string]: number;
        };
        data: {
            branches: {
                id: string;
                name: string;
                phone: string | null;
                address: string | null;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                deletedAt: Date | null;
                isDefault: boolean;
            }[];
            customers: {
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
            }[];
            customerTags: ({
                links: {
                    customerId: string;
                    tagId: string;
                }[];
            } & {
                id: string;
                name: string;
                createdAt: Date;
                tenantId: string;
                color: string;
            })[];
            customerNotes: {
                id: string;
                createdAt: Date;
                tenantId: string;
                customerId: string;
                content: string;
            }[];
            customerPhotos: {
                id: string;
                createdAt: Date;
                tenantId: string;
                customerId: string;
                dataUrl: string;
                caption: string | null;
                tag: string | null;
            }[];
            serviceCategories: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                deletedAt: Date | null;
                sortOrder: number;
            }[];
            services: {
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
            }[];
            productCategories: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                deletedAt: Date | null;
                sortOrder: number;
            }[];
            products: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                categoryId: string | null;
                price: bigint;
                imageUrl: string | null;
                isActive: boolean;
                deletedAt: Date | null;
                sku: string | null;
                unit: string | null;
                costPrice: bigint;
            }[];
            operators: {
                id: string;
                name: string;
                phone: string | null;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                isActive: boolean;
                email: string | null;
                avatarColor: string | null;
                branchId: string;
                title: string | null;
                level: number;
                avatarUrl: string | null;
                isGroup: boolean;
                showInPublicBooking: boolean;
                basicSalary: bigint;
                basicSalaryType: import("@prisma/client").$Enums.SalaryType;
                startDate: Date | null;
            }[];
            appointments: ({
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
            })[];
            invoices: ({
                items: {
                    id: string;
                    invoiceId: string;
                    quantity: number;
                    refId: string | null;
                    priceSnapshot: bigint;
                    itemType: import("@prisma/client").$Enums.InvoiceItemType;
                    nameSnapshot: string;
                    discount: bigint;
                    serverId: string | null;
                    sellerId: string | null;
                    consultantId: string | null;
                    referralSource: string | null;
                }[];
                payments: {
                    id: string;
                    note: string | null;
                    cashierId: string | null;
                    paidAt: Date;
                    method: import("@prisma/client").$Enums.PaymentMethod;
                    amount: bigint;
                    isRefund: boolean;
                    invoiceId: string;
                }[];
            } & {
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
            })[];
            cardTemplates: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                price: bigint;
                isActive: boolean;
                deletedAt: Date | null;
                type: import("@prisma/client").$Enums.CardType;
                serviceId: string | null;
                faceValue: bigint;
                bonusValue: bigint;
                totalSessions: number;
                validityDays: number;
            }[];
            cards: {
                id: string;
                status: import("@prisma/client").$Enums.CardStatus;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                code: string;
                customerId: string;
                type: import("@prisma/client").$Enums.CardType;
                expiresAt: Date;
                templateId: string;
                remainingValue: bigint;
                remainingSessions: number;
                issuedAt: Date;
            }[];
            cardTransactions: {
                id: string;
                createdAt: Date;
                tenantId: string;
                note: string | null;
                invoiceId: string | null;
                type: import("@prisma/client").$Enums.CardTxnType;
                sessionDelta: number;
                valueDelta: bigint;
                customerCardId: string;
            }[];
            inventory: {
                id: string;
                updatedAt: Date;
                tenantId: string;
                branchId: string;
                productId: string;
                quantity: number;
            }[];
            stockMovements: {
                id: string;
                createdAt: Date;
                tenantId: string;
                costPrice: bigint;
                note: string | null;
                branchId: string;
                productId: string;
                quantity: number;
                type: import("@prisma/client").$Enums.StockMovementType;
                operatorId: string | null;
                batchId: string | null;
            }[];
            suppliers: {
                id: string;
                name: string;
                phone: string | null;
                address: string | null;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                deletedAt: Date | null;
                note: string | null;
            }[];
            serviceConsumptions: {
                id: string;
                tenantId: string;
                productId: string;
                quantity: number;
                serviceId: string;
            }[];
            vouchers: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                tenantId: string;
                code: string;
                isActive: boolean;
                discountType: import("@prisma/client").$Enums.DiscountType;
                discountValue: bigint;
                maxDiscount: bigint;
                minOrder: bigint;
                totalQuantity: number | null;
                usedCount: number;
                expiresAt: Date | null;
            }[];
            settings: {
                updatedAt: Date;
                tenantId: string;
                key: string;
                valueJson: import("@prisma/client/runtime/library").JsonValue;
            }[];
        };
    }>;
    validateRestore(t: string, body: any): Promise<{
        valid: boolean;
        dryRun: boolean;
        format: any;
        version: any;
        source: {
            name: any;
            subdomain: any;
            exportedAt: any;
        };
        target: {
            name: string;
            subdomain: string;
        };
        counts: Record<string, number>;
        duplicateIds: Record<string, number>;
        references: {
            missingCustomer: number;
            missingService: number;
            missingProduct: number;
            missingBranch: number;
            missingOperator: number;
            missingCardTemplate: number;
        };
        databaseConflicts: {
            branches: number;
            customers: number;
            appointments: number;
            invoices: number;
        };
        errors: string[];
    }>;
    restore(t: string, body: any): Promise<{
        restored: boolean;
        mode: string;
        deleted: number;
        sourceExportedAt: any;
        stats: Record<string, {
            created: number;
            updated: number;
            skippedNewer: number;
        }>;
    }>;
    listBranches(t: string, user: AuthUser): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        isDefault: boolean;
    }[]>;
    createBranch(t: string, dto: any): import("@prisma/client").Prisma.Prisma__BranchClient<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        isDefault: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateBranch(t: string, id: string, dto: any): Promise<{
        id: string;
        name: string;
        phone: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        deletedAt: Date | null;
        isDefault: boolean;
    }>;
    removeBranch(t: string, id: string): Promise<{
        success: boolean;
    }>;
    listUsers(t: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        roles: import("@prisma/client").$Enums.RoleName[];
        branchIds: string[];
    }[]>;
    createUser(t: string, current: AuthUser, dto: any): Promise<{
        id: string;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.RoleName;
        branchIds: string[];
        operatorId: string | null;
    }>;
    updateUserAccess(t: string, current: AuthUser, id: string, dto: {
        role: RoleName;
        branchIds: string[];
    }): Promise<{
        id: string;
        role: import("@prisma/client").$Enums.RoleName;
        branchIds: string[];
    }>;
    setActive(t: string, current: AuthUser, id: string, dto: {
        isActive: boolean;
    }): Promise<{
        id: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        isActive: boolean;
        deletedAt: Date | null;
        email: string;
        passwordHash: string | null;
        googleId: string | null;
        tokenVersion: number;
    }>;
}
