import type { Response } from 'express';
import { AuthUser } from '../../common/auth/jwt-payload';
import { CashbookService } from './cashbook.service';
import { CreateCashBookEntryDto, QueryCashBookDto } from './dto/cashbook.dto';
export declare class CashbookController {
    private readonly cashbook;
    constructor(cashbook: CashbookService);
    list(t: string, res: Response, q: QueryCashBookDto): Promise<void>;
    create(t: string, user: AuthUser, dto: CreateCashBookEntryDto): Promise<import("./cashbook.service").CashBookRow>;
    remove(t: string, id: string): Promise<{
        success: true;
    }>;
}
