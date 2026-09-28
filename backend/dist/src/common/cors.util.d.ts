export interface BuildCorsOriginOptions {
    corsOriginsEnv?: string | null;
    isProduction: boolean;
}
export declare function buildCorsOriginResolver(opts: BuildCorsOriginOptions): (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => void;
