import { AppointmentStatus } from '@prisma/client';
export declare const ALLOWED_TRANSITIONS: Record<AppointmentStatus, AppointmentStatus[]>;
export declare function canTransition(from: AppointmentStatus, to: AppointmentStatus): boolean;
