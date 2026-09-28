import { RoleName } from '@prisma/client';
export declare const IS_PUBLIC_KEY = "isPublic";
export declare const Public: () => import("@nestjs/common").CustomDecorator<string>;
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: RoleName[]) => import("@nestjs/common").CustomDecorator<string>;
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
export declare const TenantId: (...dataOrPipes: unknown[]) => ParameterDecorator;
export declare const SuperAdmin: () => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare const CurrentSystemUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
