import { Response } from 'express';
import { RelayService } from './relay.service';
export declare class RelayController {
    private readonly relay;
    constructor(relay: RelayService);
    ask(domain: string, res: Response): Promise<void>;
    domains(secret: string): Promise<{
        domains: {
            domain: string;
            origin: string;
        }[];
    }>;
}
