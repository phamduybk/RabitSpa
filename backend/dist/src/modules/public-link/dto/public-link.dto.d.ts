export declare class ProvisionPublicLinkDto {
    localPort?: number;
}
export declare class RedeemPairingDto {
    code: string;
    machineFingerprint?: string;
    os?: string;
    appVersion?: string;
    localPort?: number;
}
export declare class HeartbeatDto {
    os?: string;
    appVersion?: string;
    currentTunnelId?: string;
}
export declare class ExchangeSsoDto {
    code: string;
}
