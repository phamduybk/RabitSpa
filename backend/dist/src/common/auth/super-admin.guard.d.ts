import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class SuperAdminGuard implements CanActivate {
    private readonly jwt;
    private readonly config;
    private readonly prisma;
    constructor(jwt: JwtService, config: ConfigService, prisma: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
