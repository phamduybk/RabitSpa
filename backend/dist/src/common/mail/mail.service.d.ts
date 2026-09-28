import { ConfigService } from '@nestjs/config';
export interface SendMailParams {
    to: string;
    subject: string;
    html: string;
    text?: string;
}
export declare class MailService {
    private readonly config;
    private readonly logger;
    private transporter;
    private readonly from;
    private readonly configured;
    constructor(config: ConfigService);
    send(params: SendMailParams): Promise<{
        delivered: boolean;
        mode: 'smtp' | 'console';
    }>;
}
