export declare function isSqliteProvider(): boolean;
export declare function ci<T extends Record<string, unknown>>(filter: T): T & {
    mode?: 'insensitive';
};
export declare function advisoryLock(tx: {
    $executeRaw: (query: TemplateStringsArray, ...values: unknown[]) => Promise<unknown>;
}, key: string): Promise<void>;
